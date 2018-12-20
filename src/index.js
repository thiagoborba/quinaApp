import express from 'express';
import routes from './routes';
import cors from 'cors';
import './config/db'
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()) //sempre deve ser setado antes das rotas
app.use('/api', routes);
app.use(express.static(`${__dirname}/client`))


app.get('/', (req, res) => {
  res.send('get working');
});

const port = 3001;

app.listen(port, () => {
  console.log(`server running on port ${port}`)
});
