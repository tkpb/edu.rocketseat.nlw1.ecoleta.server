import express from 'express';
import routes from './routes';
const app = express();
app.use(express.json());
console.log('server rodando');

app.use(routes);

app.listen(3333);