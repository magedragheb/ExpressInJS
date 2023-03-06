import { mypino } from "./mylogger.mjs";

export const errorHandler = (error, req, res, next) => {
  mypino.logger.error(error);
  if (req.body) mypino.logger.error(req.body);
  res.status(500).send("Error occured");
  next();
};
