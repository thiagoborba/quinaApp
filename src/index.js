import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

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
