import express from "express";
import { register, login ,getUsers} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", protect, authorize(["Admin"]), getUsers);

export default router;
