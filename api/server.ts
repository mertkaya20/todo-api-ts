import express from "express";
import todosRouter from "./todos/todos.router";

const server = express();

server.use(express.json());

server.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

server.use("/todos", todosRouter);

export default server;
