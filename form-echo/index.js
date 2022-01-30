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

let counter = 0;
function newClient() {
  return 'Client ' + counter++;
}

app.get('/cookies', (req, res) => {
  const client = req.cookies.client;
  console.log(`Client: ${client}`)
  const foo = `
    client: ${client || 'New connection'}
    hostname: ${req.hostname}
    cookies: ${JSON.stringify(req.cookies)}
  `
  if(!client) res.cookie('client' , newClient(), { sameSite: 'none', secure: true });
  res.send(foo)
})

app.get('/redirect', (req, res) => {
  res.redirect(307, '/redirected')
})

app.get('/redirected', (req, res) => {
  res.send('Welcome home Kanga')
})

app.listen(PORT, () => {
  console.log(`App listenig at port ${PORT}`)
})
