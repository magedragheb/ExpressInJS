import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUserById,
  getUsers,
} from "../controllers/usersController.mjs";

export const router = express.Router();

router.get("/", (req, res) => res.send("Hello"));
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", addUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);
