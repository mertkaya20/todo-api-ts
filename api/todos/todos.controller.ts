import { Request, Response } from "express";
import * as todosModel from "./todos.model";

export async function getAllTodos(req: Request, res: Response) {
  try {
    const todos = await todosModel.getAll();

    if (todos.length === 0) {
      return res.status(404).json({ message: "First create some todos." });
    }

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}

export async function getTodoById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const todo = await todosModel.getById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}

export async function createTodo(req: Request, res: Response) {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const [id] = await todosModel.create({ title });
    const createdTodo = await todosModel.getById(id);
    res.status(201).json(createdTodo);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}

export async function updateTodo(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { title, completed } = req.body;

    const existingTodo = await todosModel.getById(id);
    if (!existingTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await todosModel.update(id, { title, completed });
    const updatedTodo = await todosModel.getById(id);
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}

export async function deleteTodo(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const existingTodo = await todosModel.getById(id);
    if (!existingTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await todosModel.remove(id);
    res.status(200).json(existingTodo);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
