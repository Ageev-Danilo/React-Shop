import   express  from 'express'
import cors from 'cors'
import { productRouter } from "./product/product.router";
import { categoryRouter } from './category/category.router';
import { mailRouter } from "./main/mail.router";
import {userRouter} from "./user/user.router"
import { emailRouter } from './password-reset/email.router';
import { config } from "dotenv"



const app = express()

app.use(cors({
    origin: ["http://localhost:3000"]
}))

app.use(express.json())
app.use(productRouter)
app.use("/users/profile", categoryRouter)
app.use("/mail", mailRouter);
app.use('/api/email', emailRouter);
app.use(userRouter)



app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000')
})

