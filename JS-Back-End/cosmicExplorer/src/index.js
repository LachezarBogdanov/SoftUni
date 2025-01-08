import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import 'dotenv/config';

import routes from './routes.js';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

const url = 'mongodb://localhost:27017';
await mongoose.connect(url, { dbName: 'cosmic' }) //TODO change db name
    .then(() => console.log('db connected'))
    .catch((err) => console.log(`db failed: ${err}`));

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('views', 'src/views');
app.set('view engine', 'hbs');

app.use('/static', express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authMiddleware);
app.use(routes);

app.listen(3000, () => console.log('Server is listening on port http://localhost:3000...'));
