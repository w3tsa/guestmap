import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import { notFound, errorHandler} from './middlewares.js';
import api from './api/index.js'

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

app.use('/api/v1', api)


app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
console.log(`listening on ${port}`)
});