import { Response, Request } from "express";

export class Context {
  req: Request & { session: Express.Session };
  res: Response;
}
