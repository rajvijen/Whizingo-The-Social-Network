const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");

// import model
const User = require("../../models/User");

router.get("/test", (req, res, next) => {
  res.json({ msg: "hello words" });
});

// @route   get api/recommendations
// @desc   get recommendations
// @access  Private

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
    
    console.log("User to be recommend", req.user.id);
    User.findById(req.user.id)
    .then(user => {
        //console.log("recommends", user.recommendations);
        User.find({ _id: { $in: user.recommendations } })
            .select("name avatar")
            .then(data => {
                //console.log(data);
                res.json(data);
            });
    })
    .catch(err => {
        res.status(404).json({ norecommendationfound: "No recommendation found!!!" });
    });
    }
);

module.exports = router;
