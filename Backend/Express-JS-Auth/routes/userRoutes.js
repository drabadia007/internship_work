import express from "express";
const router = express.Router();
import {
  userRegistration,
  userLogin,
  changeUserPassword,
  getLoggedInUser,
  sendUserPasswordResetEmail,
  userPasswordReset,
} from "../controllers/userController.js";
import checkUserAuth from "../middlewares/user_authMiddleware.js";

router.use("/changePassword", checkUserAuth);
router.use("/getUser", checkUserAuth);

// public routes
router.route("/register").post(userRegistration);
router.route("/login").post(userLogin);
router.route("/reset-password-link").post(sendUserPasswordResetEmail);
router.route("/reset-password/:id/:token").post(userPasswordReset);

// private routed
router.route("/changePassword").post(changeUserPassword);
router.route("/getUser").get(getLoggedInUser);

export default router;
