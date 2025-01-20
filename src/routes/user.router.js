import express from "express";
import usersController from "../controllers/users.controller.js";
const usersRouter = express.Router();

usersRouter.get("/user-list", usersController.usesrsList);
usersRouter.get("/user-rating-list/:user_id", usersController.userRating);
usersRouter.get("/user-liked-list/:user_id", usersController.userLikedList);
usersRouter.post("/user-order", usersController.userOrder);
usersRouter.post("/addingUserListById", usersController.addingUserListById);

export default usersRouter;
