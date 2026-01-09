import   express  from 'express'
import { productRouter } from "./product/product.router";
import { categoryRouter } from './category/category.router';
import { mailRouter } from "./main/mail.router";
import {userRouter} from "./user/user.router"

const app: express.Express = express()

app.use(express.json())
app.use(productRouter)
app.use("/users/profile", categoryRouter)
app.use("/mail", mailRouter);
app.use(userRouter)

app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000')
})