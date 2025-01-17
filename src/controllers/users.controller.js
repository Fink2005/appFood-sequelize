import { responeSuccess } from "../common/helpers/respone.helper.js";
import usersService from "../services/users.service.js";

const usersController = {
  usesrsList: async (req, res, next) => {
    try {
      const users = await usersService.usersList(req);
      const resData = responeSuccess(users, "thanh cong", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  userOrder: async (req, res, next) => {
    try {
      const users = await usersService.userOrder(req);
      const resData = responeSuccess(users, "thanh cong roi do", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  userRating: async (req, res, next) => {
    try {
      const users = await usersService.userRating(req);
      const resData = responeSuccess(users, "thanh cong roi do", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  userLikedList: async (req, res, next) => {
    try {
      const users = await usersService.userLikedList(req);
      const resData = responeSuccess(users, "thanh cong roi do", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  addingUserListById: async (req, res, next) => {
    try {
      const users = await usersService.addingUserListById(req);
      const resData = responeSuccess(users, "thanh cong roi ne", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default usersController;
