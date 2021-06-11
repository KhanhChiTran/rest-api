const express = require("express");
const router = express.Router();
const User = require("./User");

//Create a new user
router.post("/", (req, res) => {
  console.log(req.body.name);
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    (err, user) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error!");
      }
      res.status(200).send(user);
    }
  );
});

// Returns all the users in the database

router.get("/", (req, res) => {
  console.log("okkkkk");
  User.find({}, (err, users) => {
    if (err)
      return res.status(500).send("There was a problem finding the users");
    res.status(200).send(users);
  });
});

//Gets a single user from the database

router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).send("Finding user failed");
    if (!user) return res.status(404).send("No user found. ");
    res.status(200).send(user);
  });
});
module.exports = router;
