import { Router } from "express";
const boardsRouter = Router();

boardsRouter.get("/", (_, res) => {
 res.json({
  boards: [
   { id: "1", title: "Development" },
   { id: "2", title: "Design" },
   { id: "3", title: "QA & Testing" }
  ]
 });
});

export default boardsRouter;
