const express = require("express");
const router = express.Router();
const parser = require("body-parser");
const userController = require("../controller/user");
const jsonParser = parser.json();
const { check } = require("express-validator/check");

router.post(
  "/register",
  [
    check("firstName", "First Name is required").not().isEmpty(),
    check("lastName", "Last Name is Required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a Password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  userController.register
);

module.exports = router;
