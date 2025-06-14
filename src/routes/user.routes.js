import { Router } from "express";
import {userRegister} from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();
console.log(typeof userRegister);

router.post("/register", userRegister);

export default router;
