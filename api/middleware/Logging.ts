import chalk = require("chalk");
import { Request, Response } from "express";

const statusCodeColoring = (code: number): string => {
  const codeType: number = code / 100;
  switch (codeType) {
    case 2:
      return chalk.greenBright(code);
    case 3:
      return chalk.yellowBright(code);
    case 4:
      return chalk.redBright(code);
    case 5:
      return chalk.redBright(code);
    default:
      return code.toString();
  }
};

const logRouteStatus = (req: Request, res: Response): void => {
  console.log(
    `Request to ${req.originalUrl}: ${statusCodeColoring(res.statusCode)}`
  );
};

export { logRouteStatus };
