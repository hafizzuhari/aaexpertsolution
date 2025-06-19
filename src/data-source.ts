import { DataSource, EntitySchema } from "typeorm";

const modules = import.meta.glob("/src/entities/**/*.ts", { eager: true });

const entities = Object.values(modules).flatMap((module) =>
  Object.values(module as object).flatMap((schema) => schema)
) as EntitySchema[];

export const dataSource = new DataSource({
  type: "sqlite",
  database: ".db",
  logging: true,
  synchronize: true,
  entities: entities,
});

await dataSource.initialize();
