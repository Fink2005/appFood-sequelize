import models from "../common/sequelize/sequelize.init.js";

const foodsService = {
  foodsList: async () => {
    const foodne = await models.food.findAll({ raw: true });
    return foodne;
  },
};

export default foodsService;
