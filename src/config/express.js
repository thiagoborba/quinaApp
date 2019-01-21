import express from 'express';
import routes from '../routes/index';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
app.use(express.static(`${__dirname}/client`));

export default app;