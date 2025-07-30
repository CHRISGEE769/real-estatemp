import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", test); // Route to test if the user route is working

export default router;
