import express = require("express");
import chalk = require("chalk");
import { Request, Response, NextFunction, Express } from "express";
import { logRouteStatus } from "./middleware/Logging";
import { __prod__ } from "./constants";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./src/RootResolver";
import session from "express-session";
import { createConnection } from "typeorm";

const PORT = !__prod__ ? 3000 : 80;

const main = async (): Promise<void> => {
  const app: Express = express();
  await createConnection();

  app.use(function (req: Request, res: Response, next: NextFunction) {
    logRouteStatus(req, res);
    next();
  });

  app.use(session({ secret: "cat", resave: false, saveUninitialized: false }));

  app.use("/healthz", (): void => {});

  const apolloServer = new ApolloServer({
    playground: !__prod__,
    schema: await resolvers,
    context: ({ req, res }) => ({
      req: req,
      res: res,
    }),
  });
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, (): void => {
    console.log(chalk.cyan("App listening on port"), chalk.white(PORT));
  });
};

main();
