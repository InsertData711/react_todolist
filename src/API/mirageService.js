import { Model, createServer } from "miragejs";

export const makeServer = ({ environment = "development" } = {}) => {
  let server = createServer({
    environment,

    models: {
      todo: Model,
    },

    seeds(server) {
      server.create("todo", { id: 1, name: "study", bool: false });
      server.create("todo", { id: 2, name: "shopping", bool: false });
      server.create("todo", { id: 3, name: "work", bool: false });
      server.create("todo", { id: 4, name: "gmy", bool: false });
    },

    routes() {
      this.namespace = "api";

      this.get("/todolist", (schema) => ({
        todolist: schema.todo.all(),
      }));
    },
  });

  return server;
};
