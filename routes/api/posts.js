const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
//model import
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const Notification = require("../../models/notification");

const validatePostInput = require("../../validation/post");

router.get("/test", (req, res, next) => {
  res.json({ msg: "hello workds" });
});

//@route get api/posts
//@acces public
// @desc get all posts
router.get("/", (req, res, next) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "no posts found " }));
});

//@route get api/posts/:id
//@acces public
// @desc get post by id
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id)

    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "no post found for the id " })
    );
});

//@route Posts api/posts
//@acess private
//@desc create post

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("postImage"),
  (req, res, next) => {
    console.log(req.file.path);
    console.log(req.user.name);
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar, //name and avatar  is logged in we will fetch name and avatar from redux (user state)
      user: req.user.id,
      name: req.user.name,
      img: req.file.path
    });
    newPost.save().then(post => res.json(post));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          post.remove().then(post => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
);

// @route   POST api/posts/like/:id
// @desc    Like post
// @access  Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "User already liked this post" });
          }

          // Add user id to likes array
          post.likes.unshift({ user: req.user.id });

          post.save().then(post => {
            //add notification to notification
            // console.log('---------------------------------',req.user.id,post.user);
            const newNotification = new Notification({
              type_of_notification: "like",
              seen: false,
              post: post.id,
              who_did: req.user.id,
              who_did_name: req.user.name,
              to_whom: post.user
            });
            newNotification.save().then(notification => {
              User.findById(notification.to_whom)
                .then(user => {
                  user.notifications.push(notification);
                  user.save().then(user => res.json(post));
                })
                .catch(err => {
                  console.log(err);
                });
            });
          });
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
);

// @route   POST api/posts/unlike/:id
// @desc    Unlike post
// @access  Private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ notliked: "You have not yet liked this post" });
          }

          // Get remove index
          const removeIndex = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          post.likes.splice(removeIndex, 1);

          // Save
          post.save().then(post => {
            Notification.findOneAndRemove({
              type_of_notification: "like",
              post: post.id,
              who_did: req.user.id
            }).then(notification => {
              Users.findById(notification.to_whom).then(user => {
                user.notifications.pull(notification);
                user.save().then(user => res.json(post));
              });
            });
          });
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
);

// @route   POST api/posts/comment/:id
// @desc    Add comment to post
// @access  Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Post.findById(req.params.id)
      .then(post => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id,
          name: req.user.name
        };

        // Add to comments array
        post.comments.unshift(newComment);

        // Save
        post.save().then(post => {
          const newNotification = new Notification({
            type_of_notification: "comment",
            seen: false,
            post: post.id,
            who_did: req.user.id,
            who_did_name: req.user.name,
            to_whom: post.user
          });
          newNotification.save().then(notification => {
            User.findById(notification.to_whom)
              .then(user => {
                user.notifications.push(notification);
                user.save().then(user => res.json(post));
              })
              .catch(err => {
                console.log(err);
              });
          });
        });
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found" }));
  }
);

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        // Check to see if comment exists
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexists: "Comment does not exist" });
        }

        // Get remove index
        const removeIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        // Splice comment out of array
        post.comments.splice(removeIndex, 1);

        post.save().then(post => {
          res.json(post);
        });
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found" }));
  }
);

module.exports = router;
