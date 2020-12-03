const { Post } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/user");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new Post({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.json({
          message: "User Added Successfully",
        });
      })
      .catch((error) => {
        res.json({
          message: "An error ocurred",
        });
      });
  });
};

const login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  Post.findOne({ $or: [{ username: username }, { password: password }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            const token = jwt.sign(
              { username: user.username },
              "verySecretValue",
              { expiresIn: "1h" }
            );
            res.json({
              message: "Login Succesfull",
              token,
            });
          } else {
            res.json({
              message: "Password does not matched",
            });
          }
        });
      } else {
        res.json({
          message: "No user found",
        });
      }
    }
  );
};

module.exports = {
  register,
  login,
};
