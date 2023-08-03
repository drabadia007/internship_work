import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../config/emailConfig.js";

const userRegistration = async (req, res) => {
  const { name, email, password, tc } = req.body;

  const user = await UserModel.findOne({ email: email });
  if (user) {
    res.send({ status: "failed", message: "this email already exists" });
  } else {
    if (name && email && password && tc) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userDoc = new UserModel({
          name,
          email,
          password: hashedPassword,
          tc,
        });
        userDoc.save();
        const saved_user = await UserModel.findOne({ email: email });
        const token = jwt.sign(
          { userId: saved_user._id },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        res.send({
          status: "successfull",
          message: "user registered successfully",
          token: token,
        });
      } catch (error) {
        res.send({ status: "failed", message: "unable to register user" });
      }
    } else {
      res.send({
        status: "failed",
        message: "please provide all the required details",
      });
    }
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      res.send({
        status: "failed",
        message:
          "this email does'nt exist in the DataBase please register first",
      });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (email === user.email && isMatch) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        res.send({
          status: "successfull",
          message: "user logged in Successfully",
          token: token,
        });
      } else {
        res.send({
          status: "failed",
          message: "email or password may be wrong",
        });
      }
    }
  } else {
    res.send({
      status: "failed",
      message: "all fields are mandatory please provide it",
    });
  }
};

const changeUserPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;

  if (password && confirmPassword) {
    if (password !== confirmPassword) {
      res.send({
        status: "failed",
        message: "password and confirm password does'nt match",
      });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const newHashedPassword = await bcrypt.hash(password, salt);

      //   console.log(req.user);
      // set new password in the existing DB
      await UserModel.findByIdAndUpdate(req.user._id, {
        $set: {
          password: newHashedPassword,
        },
      });

      res.send({
        status: "successfull",
        message: "password changed successfully",
      });
    } catch (error) {
      res.send({ status: "failed", message: "unable to hash password" });
    }
  } else {
    res.send({
      status: "failed",
      message: "password and confirm password fields are required",
    });
  }
};

const getLoggedInUser = async (req, res) => {
  res.send({ User: req.user });
};

const sendUserPasswordResetEmail = async (req, res) => {
  const { email } = req.body;
  if (email) {
    try {
      const user = await UserModel.findOne({ email: email });

      if (!user) {
        res.send({
          status: "failed",
          message: "email does'nt exist in the database",
        });
      } else {
        const secret = user._id + process.env.JWT_SECRET;
        const token = jwt.sign({ userId: user._id }, secret, {
          expiresIn: "15m",
        });
        const link = `http://localhost:3000/api/user/reset/${user._id}/${token}`;
        // Send Email
        let info = await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: user.email,
          subject: "AuthApp - Password Reset Link",
          html: `<a href=${link}>Click Here</a> to Reset Your Password`,
        });
        console.log(link);
        res.send({
          status: "successfull",
          message: "password reset link sent to your email please check it",
        });
      }
    } catch (error) {
      res.send({ status: "failed", message: `${error}` });
    }
  } else {
    res.send({ status: "failed", message: "email field is empty" });
  }
};

const userPasswordReset = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const { id, token } = req.params;
  const user = await UserModel.findById(id);
  const new_secret = user._id + process.env.JWT_SECRET;

  try {
    jwt.verify(token, new_secret);
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        res.send({
          status: "failed",
          message: "password and confirm password does'nt match",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const newHashedPassword = await bcrypt.hash(password, salt);

        await UserModel.findByIdAndUpdate(user._id, {
          $set: {
            password: newHashedPassword,
          },
        });
        res.send({
          status: "successfull",
          message: "password updated successfully",
        });
      }
    } else {
      res.send({
        status: "failed",
        message: "please prove password and confirm password",
      });
    }
  } catch (error) {
    res.send({ status: "failed", message: "token Invalid" });
  }
};

export {
  userRegistration,
  userLogin,
  changeUserPassword,
  getLoggedInUser,
  sendUserPasswordResetEmail,
  userPasswordReset,
};
