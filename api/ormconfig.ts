import DevelopmentENV from "./env/development/ormconfig";
import StagingENV from "./env/staging/ormconfig";
import ProductionENV from "./env/production/ormconfig";

let trueConfig;
switch (process.env.NODE_ENV) {
  case "development":
    trueConfig = DevelopmentENV;
    break;
  case "staging":
    trueConfig = StagingENV;
    break;
  case "production":
    trueConfig = ProductionENV;
    break;
  default:
    throw "Missing NODE_ENV";
}

export = {
  entities: ["src/**/**.entity{.ts,.js}"],
  migrations: ["src/migrations/*.ts"],
  cli: {
    migrationsDir: "src/migrations",
  },
  ...trueConfig,
  synchronize: false,
};
