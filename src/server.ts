import   express  from 'express'
import { productRouter } from "./product/product.router";
import { categoryRouter } from './category/category.router';
import { mailRouter } from "./main/mail.router";
import {userRouter} from "./user/user.router"
import cors from "cors"

const app: express.Express = express()

app.use(express.json())
app.use(productRouter)
app.use("/users/profile", categoryRouter)
app.use("/mail", mailRouter);
app.use(userRouter)

app.use(cors({
    origin: ["http://localhost:3000/register"]
}))

app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000')
})