import   express  from 'express'
import { productRouter } from "./product/product.router";
import { categoryRouter } from './category/category.router';
import contactsRouter from './contacts/contacts.router';
const app: express.Express = express()

app.use(express.json())
app.use(productRouter)
app.use(categoryRouter)
app.use("/users/profile", contactsRouter)


app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000')
})