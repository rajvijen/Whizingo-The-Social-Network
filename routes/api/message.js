const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");

//model import
const User = require("../../models/User");
const Message = require("../../models/Message");

const validatePostInput = require("../../validation/post");

router.get("/test", (req, res, next) => {
  res.json({ msg: "hello workds" });
});

router.get(
    "/received/:id",
    passport.authenticate("jwt", { session: false }),
    (req,res,next) => {
        
        User.findById(req.params.id)
        .then(user => {
            Message.find({ to: req.user.id,from: user.id })
            .then( messages => {
                res.json(messages);
            })
            .catch(err => {
                res.status(404).json({ nomessagefound: "no message found for the user" });
            });
        })
        .catch(err => {
            res.status(404).json({ notouserfound: "no user with id in params found for the user" });
        });
});

router.get(
    "/sent/:id",
    passport.authenticate("jwt", { session: false }),
    (req,res,next) => {
        console.log('entered');
        User.findById(req.params.id)
        .then(user => {
            Message.find({ to: user.id,from: req.user.id })
            .then( messages => {
                res.json(messages);
            })
            .catch(err => {
                res.status(404).json({ nomessagefound: "no message found for the user" });
            });
        })
        .catch(err => {
            res.status(404).json({ notouserfound: "no user with id in params found for the user" });
        });
});

router.post(
    "/send/:id",
    passport.authenticate("jwt", { session: false }),
    (req,res,next) => {
        // const { errors, isValid } = validatePostInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }
        User.findById(req.params.id)
        .then(user =>{
            const newMessage = new Message({
                from: req.user.id,
                from_name: req.user.name,
                to: user.id,
                to_name: user.name,
                from_seen: false,
                to_seen: false,
                content: req.body.content
            });
            newMessage.save().then(message => {
                User.findById(req.user.id)
                .then(user1 => {
                    user1.messages.push(message);
                    user1.save()
                    .then(user2 => {
                        user.messages.push(message);
                        user.save()
                        .then(user3 => res.json(message))
                        .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            });
        })
        .catch(err => {
            console.log(err);
        });
});

router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        User.findById(req.user.id)
        .then(user => {
            user.messages.pull(req.params.id);
            user.save()
            .then(user1 => {
                Message.findById(req.params.id)
                .then(message => {
                    // console.log(message.from.toString(),req.user.id,message.to,message.from);
                    User.findById(message.from.toString() === req.user.id?message.to:message.from)
                    .then(user2 => {
                        var found = user2.messages.find(function(element) { 
                            // console.log(element.toString(),req.params.id);
                            return element.toString() === req.params.id; 
                        });
                        if(!found)
                        {
                            Message.findByIdAndRemove(req.params.id)
                            .then(message1 => res.json({ success: true }))
                            .catch(err => console.log(err));
                        }
                        else
                        {
                            res.json({ success: true });
                        }
                    })
                    .catch(err => {console.log(err)});
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        })
        .catch(err => res.status(404).json({ messagenotfound: "No message found" }));
    }
  );

module.exports = router;