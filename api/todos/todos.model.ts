import db from "../../data/db-config";
import { Todo } from "../../data/types";

export function getAll(): Promise<Todo[]> {
  return db("todos");
}

export function getById(id: number): Promise<Todo | undefined> {
  return db("todos").where("id", id).first();
}

export function create(todo: Pick<Todo, "title">): Promise<number[]> {
  return db("todos").insert(todo);
}

export function update(
  id: number,
  changes: Partial<Pick<Todo, "title" | "completed">>,
): Promise<number> {
  return db("todos").where("id", id).update(changes);
}

export function remove(id: number): Promise<number> {
  return db("todos").where("id", id).del();
}
