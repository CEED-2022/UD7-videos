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

const origins = [
  'http://localhost:9090',
  'http://localhost:8080',
];
const dynamicCORS =  function (origin, callback) {
  if (!origin) return callback(null, true);

  if (origins.indexOf(origin) === -1) {
    var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
    return callback(new Error(msg), false);
  }
  return callback(null, origin);
}
const corsOptions = {
  origin: dynamicCORS,
  credentials: true
}
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)) // include before other routes

app.all('/', (req, res) => {
  res.send(echoFields(req))
})

app.get('/cookies', (req, res) => {
  const foo = `
    hostname: ${req.hostname}
    cookies: ${JSON.stringify(req.cookies)}
  `
  res.send(foo)
})

app.listen(PORT, () => {
  console.log(`App listenig at port ${PORT}`)
})
