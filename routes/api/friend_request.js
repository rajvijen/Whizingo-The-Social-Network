const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../../models/User");
const Notification = require("../../models/notification");
const Schema = mongoose.Schema;

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    User.findById(req.user.id)
      .then(user => {
        console.log("wiiiiw", user.freinds);
        User.find({ _id: { $in: user.freinds } })
          .select("name avatar")
          .then(data => {
            console.log(data);
            res.json(data);
          });
      })
      .catch(err => {
        res.status(404).json({ nofriendfound: "no friend found for the user" });
      });
  }
);

// router.get(
//   "/all/recommendations",
//   passport.authenticate("jwt", { session: false }),
//   (req,res,next) => {
//       User.findById(req.user.id)
//       .then( user => {
//           const recs = user.recommendations;
//           const updatedId = [];
//           console.log(recs[0][0])
//           recs.map(rec => {
//             for (let i = 0; i <= 23; i++) {
//               // console.log(rec[1]);
//               // console.log(i.toString());
//             }
//             // updatedId.push(Object.values(rec).join(""));
//           })
//           // console.log(updatedId);
//       })
//       .catch(err => {
//           res.status(404).json({ norecommendationfound: "no recommendation found for the user" });
//       });
// });

router.post(
  "/requestsent",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const senderId = req.body.senderid;
    const recieverId = req.body.recieverid;
    console.log("in node ");
    User.findById(senderId, function(err, user) {
      console.log(err, user, senderId, "fsdfatttttttsdf");
      const recieveruser = {
        user: mongoose.Types.ObjectId(recieverId)
      };

      const usercheck = user.freinds.filter(item => {
        return item.toString() === recieveruser.user.toString();
      });

      if (usercheck.length) {
        res.status(404).json({ success: false });
      }
      // const deleterecomend = user.recommendations.filter(item => {
      //   console.log(item)
      //   return item.toString() !== recieveruser.user.toString();
      // })

      // user.recommendations = deleterecomend;
      // console.log("recom ", deleterecomend);

      user.pending.push(recieveruser.user);
      user.save();
      const newNotification = new Notification({
        type_of_notification: "friend_req_sent",
        seen: false,
        who_did: req.user.id,
        who_did_name: req.user.name,
        to_whom: req.body.recieverid
      });
      console.log("------------------------", newNotification);
      newNotification.save().then(notification => {
        User.findById(notification.to_whom)
          .then(user1 => {
            user1.notifications.push(notification);
            user1.save();
          })
          .catch(err => console.log(err));
      });
    })
      .then(user => {
        console.log(user);
        User.findById(recieverId, function(err, user) {
          const senderuser = {
            user: mongoose.Types.ObjectId(senderId)
          };

          // const deleterecomend = user.recommendations.filter(item => {
          //   return item.user.toString() !== senderuser.user.toString();
          // })

          // user.recommendations = deleterecomend;

          user.waiting.push(senderuser.user);
          user.save();
        })
          .then(user =>
            res.status(201).json({
              success: true
            })
          )
          .catch(err => res.status(404).json({ success: false }));
      })
      .catch(err => res.status(404).json({ success: false }));
  }
);

router.post(
  "/requestaccept",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    // console.log("in accept");
    const senderId = req.body.senderid;
    const recieverId = req.body.recieverid;

    User.findById(recieverId, function(err, user) {
      const senderuser = {
        user: mongoose.Types.ObjectId(senderId)
      };

      const deletewaiting = user.waiting.filter(item => {
        return item._id.toString() !== senderuser.user.toString();
      });
      console.log(deletewaiting);
      user.waiting = deletewaiting;

      user.freinds.push(senderuser.user);
      user.save();
      // console.log(recieveruser.user)
    })
      .then(user =>
        User.findById(senderId, function(err, user) {
          const recieveruser = {
            user: mongoose.Types.ObjectId(recieverId)
          };

          const deletepending = user.pending.filter(item => {
            return item._id.toString() !== recieveruser.user.toString();
          });

          user.pending = deletepending;

          user.freinds.push(recieveruser.user);
          user.save();
        })
          .then(user => res.status(201).json({ success: true }))
          .catch(err => res.status(404).json({ success: false }))
      )
      .catch(err => res.status(404).json({ success: false }));
  }
);

router.post(
  "/requestcancel",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const senderId = req.body.senderid;
    const recieverId = req.body.recieverid;

    User.findById(senderId, function(err, user) {
      const recieveruser = {
        user: mongoose.Types.ObjectId(recieverId)
      };

      const deletepending = user.pending.filter(item => {
        return item._id.toString() !== recieveruser.user.toString();
      });

      user.pending = deletepending;
      user.save();
    })
      .then(user =>
        User.findById(recieverId, function(err, user) {
          const senderuser = {
            user: mongoose.Types.ObjectId(senderId)
          };

          const deletewaiting = user.waiting.filter(item => {
            return item._id.toString() !== senderuser.user.toString();
          });

          user.waiting = deletewaiting;
          user.save();
        })
          .then(user =>
            res.status(201).json({
              success: true
            })
          )
          .catch(err => res.status(404).json({ success: false }))
      )
      .catch(err => res.status(404).json({ success: false }));
  }
);

// router.post("/friendremove", passport.authenticate("jwt", { session: false }), (req, res, next) => {
//   const senderId = req.body.senderid;//the one who is going to remove.
//   const recieverId = req.body.recieverid;//the one who will be removed.

//   User.findById(senderId, function (err, user) {

//     const recieveruser = {
//       "user": mongoose.Types.ObjectId(recieverId)
//     }

//     const deletepending = user.pending.filter(item => {
//       return item._id.toString() !== recieveruser.user.toString();
//     })

//     user.pending = deletepending;
//     user.save();
//   })
//     .then(user =>
//       User.findById(recieverId, function (err, user) {

//         const senderuser = {
//           "user": mongoose.Types.ObjectId(senderId)
//         }

//         const deletewaiting = user.waiting.filter(item => {
//           return item._id.toString() !== senderuser.user.toString();
//         })

//         user.waiting = deletewaiting;
//         user.save();
//       })
//         .then(user => res.status(201).json({
//           "success": true
//         }
//         ))
//         .catch(err => res.status(404).json({ "success": false }))

//     )
//     .catch(err => res.status(404).json({ "success": false }));

// })

module.exports = router;
