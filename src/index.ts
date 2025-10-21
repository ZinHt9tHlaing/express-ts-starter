import "dotenv/config";
import { app } from "./app";
import { logger } from "./utils/logger";

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  logger.info(`Server ready at: http://localhost:${PORT}`);
});
