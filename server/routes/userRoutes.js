import { Router } from "express";
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from "../controllers/userController.js";

const route = Router()

route.post("/", registerUser);
route.post("/auth", authUser);
route.post("/logout", logoutUser)
route.route("/profile").get(getUserProfile).put(updateUserProfile)
export default route