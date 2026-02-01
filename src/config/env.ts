import { cleanEnv, str } from "envalid";
import { config } from "dotenv"
config()


export const ENV = cleanEnv(process.env, {
    JWT_SECRET_KEY: str(),
    JWT_EXPIRES_IN: str()
})

