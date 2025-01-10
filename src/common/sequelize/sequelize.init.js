import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../constant/app.constant.js";
import initModels from "../../models/init-models.js";

const sequelize = new Sequelize(DATABASE_URL, { logging: false });
const models = initModels(sequelize);

sequelize
  .authenticate()
  .then((params) => {
    console.log("KET NOI VOI DB THANH CONG");
  })
  .catch((params) => {
    console.log("KET NOI DB KHONG THANH CONG");
  });

export default models;
