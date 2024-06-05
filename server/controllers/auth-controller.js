const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.send("Welcome to home page again");
  } catch (error) {
    console.log("ERROR ", error);
  }
};

// Register logic
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Hash the password
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({ username, email, phone, password: hash_password });
    const token = await userCreated.generateToken();

    res.json({
      msg: "User created successfully",
      token: token,
      userId: userCreated._id.toString(),
    });
    console.log(req.body);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}

// User login logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, userExist.password);

    if (isMatch) {
      const token = await userExist.generateToken();
      res.status(200).json({
        msg: "Login successfully",
        token: token,
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
}

module.exports = { home, register, login };
