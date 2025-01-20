import { responeSuccess } from "../common/helpers/respone.helper.js";
import models from "../common/sequelize/sequelize.init.js";
import restaurantsService from "../services/restaurants.service.js";

const restaurantsController = {
  restaurantsList: async (req, res, next) => {
    try {
      const restaurant = await restaurantsService.restaurantsList();
      const resData = responeSuccess(restaurant, "thanh cong em oi", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
      console.log(error);
    }
  },
  restaurantLiked: async (req, res, next) => {
    try {
      let restaurant = await restaurantsService.restaurantLiked();
      let resData = responeSuccess(restaurant, "THành cong", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  restaurantlikedList: async (req, res, next) => {
    try {
      const restaurant = await restaurantsService.restaurantlikedList(req);
      const resData = responeSuccess(restaurant, "thanh cong roi em iu", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  restaurantRating: async (req, res, next) => {
    try {
      const restaurant = await restaurantsService.restaurantRating(req);
      const resData = responeSuccess(restaurant, "thanh cong roi em iu", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  restaurantRatingList: async (req, res, next) => {
    try {
      const restaurant = await restaurantsService.restaurantRatingList(req);
      const resData = responeSuccess(restaurant, "thanh cong", 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },

  addingRestaurantsList: async (req, res, next) => {
    try {
      const restaurant = await restaurantsService.addingRestaurantsList(req);
      const resdata = responeSuccess(restaurant, "thanh cong em oi", 200);
      res.status(resdata.code).json(resdata);
    } catch (error) {
      next(error);
    }
  },
};

export default restaurantsController;
