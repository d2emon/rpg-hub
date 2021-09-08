import cors from 'cors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
// import passport from 'passport';

// import passportHelper from './helpers/passportHelper';
import {
    error404,
    errorHandler,
} from './handlers/error';

import config from './helpers/config';
import debug from './helpers/debug';
import mongoDb, { connect } from './helpers/mongo';

import pageRoutes from './routes/page';

const app = express();

const publicPath = path.join(__dirname, '..', 'public');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(publicPath));
// app.use(passport.initialize());

// app.locals.oauth = passportHelper;

app.set('dbConnection', connect(config.MONGO_URI))

mongoDb.on('error', error => debug(error || ''));
mongoDb.once('open', () => debug('MongoDB connected'));

app.use('/api/v1.0/page', pageRoutes);

app.use(error404);
app.use(errorHandler(app.get('env')));

export default app;
