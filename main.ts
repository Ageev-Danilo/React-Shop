import express from "express";
import pdRouter from "./product/router/";

const app = express();

app.use(express.json());

app.use("/products", pdRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});