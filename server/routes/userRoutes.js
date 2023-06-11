import { Router } from "express";
import { authUser } from "../controllers/userController.js";

const route = Router()

route.post('/auth',authUser)

export default route