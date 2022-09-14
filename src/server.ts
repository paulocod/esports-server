require('dotenv/config')
import { Request, Response } from 'express'
import app from './app'

const port = process.env.SERVER_PORT

app.get('/', async (req: Request, res: Response) => {
  res.end('Hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
