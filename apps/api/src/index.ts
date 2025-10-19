import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (_req, res) => {
 res.json({ message: "Hello from TypeScript + Node!" });
});

app.listen(3001, () => {
 console.log("Server running on PORT 3001");
});
