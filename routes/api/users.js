//authentication username email password
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//load input validation

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/User");

// @route Get api/users/test
// @desc  test users route
// @access public

router.get("/test", (req, res, next) => {
  res.json({
    msg: "users work"
  });
});

// @route Get api/users/resgitser
// @desc  register users
// @access public
router.post("/register", (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: "200",
          r: "pg",
          d: "mm"
        });
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar: avatar,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

// @route Get api/users/login
// @desc  login users
// @access public

router.post("/login", (req, res, next) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then(user => {
    if (!user) {
      errors.email = "user not foud";
      return res.status(404).json(errors);
    }
    user.recommendations.map(recc => {
      console.log(recc);
    })
    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //user macthed
        const paylod = {
          id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar
        };
        //sign token
        jwt.sign(
          paylod,
          keys.secretOrKer,
          { expiresIn: 18000 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password  incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route Get api/users/current
// @desc return  current users
// @access private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
