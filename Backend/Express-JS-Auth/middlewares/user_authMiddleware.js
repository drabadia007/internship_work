import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

const checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];

      // verify token
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);

      // get user from the token
      req.user = await UserModel.findById(userId).select("-password");
      next();
    } catch (error) {
      res.send({ status: "failed", message: "unauthorized user" });
    }
  }

  if (!token) {
    res.send({ status: "failed", message: "no token found" });
  }
};

export default checkUserAuth;
