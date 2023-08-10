import express, {Application } from 'express';
import { config } from "dotenv";
import registerRouter from "./src/router";
import registerMiddlewares from "./src/middlewares";

const app: Application = express();

registerMiddlewares(app);
registerRouter(app);

config();

const PORT: string | number = process.env.PORT || 5000;
const ENV: string = process.env.NODE_ENV || "development";

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: ` + ` Running in ${ENV} mode on port ${PORT}`
  )
);
