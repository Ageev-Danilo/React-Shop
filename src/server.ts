import   express  from 'express'
import { productRouter } from "./product/product.router";
import { categoryRouter } from './category/category.router';
const app: express.Express = express()

app.use(express.json())
app.use( productRouter)
app.use(categoryRouter)


app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000')
})