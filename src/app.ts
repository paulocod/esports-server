import express from "express";
import { adRouter } from "./routes/Ad";
import { gameRouter } from "./routes/Game";

const app = express()

app.use(express.json())

app.use('/', adRouter)
app.use('/', gameRouter)

export default app
