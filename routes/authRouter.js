import express from "express";
import { register } from "../controllers/authController.js";
import validateBody from "../helpers/validateBody.js";
import { registerSchema } from "../schemas/authSchemas.js";

const router = express.Router();

router.post("/register", validateBody(registerSchema), register);

export default router;
