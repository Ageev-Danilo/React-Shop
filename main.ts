import express from "express";
import pRouter from "./product/router";

const app: express.Express = express()

app.use(express.json())
app.use("/products", pRouter)


app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000')
})