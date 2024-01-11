import { Request, Response } from "express";
const Express = require("express");
const port = 4000;

const app = Express();

app.get("/", (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "test" },
    { id: 2, name: "initial" },
  ]);
});

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
