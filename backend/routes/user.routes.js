import express from "express";
import {
  checkUsername,
  editProfile,
  followUnfollow,
  getProfile,
  login,
  logout,
  signIn,
  suggetUser,
  updatePassword,
} from "../controllers/user.controller.js";
import isAuthantication from "../middlewares/isAuthinticated.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(signIn);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/suggest").post(isAuthantication, suggetUser);
router.route("/:username").get(isAuthantication, getProfile);
router.route("/check-username").post(checkUsername);

router
  .route("/update")
  .post(isAuthantication, upload.single("profilePic"), editProfile);
router
  .route("/followunfollow/:username")
  .post(isAuthantication, followUnfollow);
router.route("/update-password").post(updatePassword);

export default router;
