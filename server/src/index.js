import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
console.log(`listening on ${port}`)
});