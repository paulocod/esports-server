require('dotenv/config')
import cors from 'cors'
import app from './app'

const port = process.env.SERVER_PORT

app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
