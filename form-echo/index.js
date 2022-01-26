const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT // Heroku assigns you a port


import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';

import echoFields from './echo.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

const corsOptions = {
  origin: [
    'http://localhost:9090'
  ],
  credentials: true,
}
app.use(cors(corsOptions));

app.all('/', (req, res) => {
  res.send(echoFields(req))
})

app.all('/cookies', (req, res) => {
  // res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
  console.log(req.cookies)
  // console.log(req)
  const foo = `
    hostname: ${req.hostname}
    cookies: ${JSON.stringify(req.cookies)}
  `
  res.send(foo)
})


app.listen(PORT, () => {
  console.log(`App listenig at port ${PORT}`)
})
