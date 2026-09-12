import db from "../../data/db-config";

export function getAll() {
  return db("todos");
}

export function getById(id: number) {
  return db("todos").where("id", id).first();
}

export function create(todo: { title: string }) {
  return db("todos").insert(todo);
}

export function update(
  id: number,
  changes: Partial<{ title: string; completed: boolean }>,
) {
  return db("todos").where("id", id).update(changes);
}

export function remove(id: number) {
  return db("todos").where("id", id).del();
}
