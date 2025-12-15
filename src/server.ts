import   express  from 'express'
import { productRouter } from "./product/product.router";

const app: express.Express = express()

app.use(express.json())
app.use("/products", productRouter)


app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000')
})