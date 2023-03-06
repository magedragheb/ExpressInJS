import express from "express";
import { router } from "./routes/router.mjs";
import { mypino } from "./middleware/mylogger.mjs";
import { datasource } from "./data/datasource.mjs";
import { errorHandler } from "./middleware/errorHandler.mjs";

const app = express();
datasource.initialize();
app.use(express.json());
app.use(errorHandler);
app.use(mypino);
app.use(router);

app.listen(5000);
