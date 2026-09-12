import { Router } from "express";
import * as todosController from "./todos.controller";

const router = Router();

router.get("/", todosController.getAllTodos);
router.get("/:id", todosController.getTodoById);
router.post("/", todosController.createTodo);
router.put("/:id", todosController.updateTodo);
router.delete("/:id", todosController.deleteTodo);

export default router;
