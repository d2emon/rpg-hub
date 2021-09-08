// import http from 'http';
import app from './app';
import config from './helpers/config';
import debug from './helpers/debug';
import normalizePort from './helpers/normalizePort';

app.set('port', normalizePort(config.PORT));

app.listen(
    app.get('port'),
    () => debug(`${process.env.APP_NAME}:run`)(`Express server listening on port ${config.PORT}`),
)

// const server = http.createServer(app);
// server.listen(app.get('port'));
/*
server.on('error', (error) => {
    if (error.syscall !== 'listen') throw error;

    const port = app.get('port');
    const bind = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            debug()(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            debug()(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});
*/
/*
server.on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    debug()(`Listening on ${bind}`);
});
*/
