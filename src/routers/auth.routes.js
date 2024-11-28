import { Router } from "express";
import { checkValidatons } from "../middlewares/index.js";
import { userSchema } from "../validations/index.js";
import { registerContrloller } from "../controllers/index.js";

export const authRouter = new Router()


authRouter.post('/register', checkValidatons(userSchema), registerContrloller)