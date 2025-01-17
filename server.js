import express from "express";
import rootRouter from "./src/routes/root.router.js";
import cors from "cors";
import { handleError } from "./src/common/helpers/error.helper.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(rootRouter);
app.use(handleError);
app.listen(8386, () => {
  console.log("server online at port 8386");
});
