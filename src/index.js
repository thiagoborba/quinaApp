import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
app.use(express.static(`${__dirname}/client`));

const port = 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`)
});