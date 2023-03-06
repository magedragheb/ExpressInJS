import { mypino } from "../middleware/mylogger.mjs";
import { datasource } from "../data/datasource.mjs";

export const getUsers = (req, res) => {
  const userRepo = datasource.getRepository("User");
  userRepo
    .find()
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      mypino.logger.error(error);
      res.send("Error loading users");
    });
};

export const getUserById = (req, res) => {
  const userRepo = datasource.getRepository("User");
  userRepo
    .find({ where: { id: req.params.id } })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      mypino.logger.error(error);
      res.send("Error reading user");
    });
};

export const addUser = (req, res) => {
  const newUser = req.body;
  mypino.logger.info(req.body);
  const userRepo = datasource.getRepository("User");
  userRepo
    .save(newUser)
    .then((newUser) => {
      res.send(newUser);
    })
    .catch((error) => {
      mypino.logger.error(error);
      res.send("Error adding user");
    });
};

export const editUser = (req, res) => {
  const userRepo = datasource.getRepository("User");
  userRepo
    .update(req.params.id, req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      mypino.logger.error(error);
      res.send("Error reading user");
    });
};

export const deleteUser = (req, res) => {
  const userRepo = datasource.getRepository("User");
  userRepo
    .delete(req.params.id)
    .catch((error) => {
      mypino.logger.error(error);
      res.send("Error deleting user");
    });
};
