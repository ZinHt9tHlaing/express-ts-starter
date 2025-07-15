import express, { Application } from "express";
import dotenv from "dotenv";
import { routes } from "./routes/routeIndex";
import { logger } from "./utils/logger";
import bodyParser from "body-parser";
dotenv.config();

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// dynamic routes
routes(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  logger.info(`Server running on port: http://localhost:${PORT}`);
});
