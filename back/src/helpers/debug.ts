import debug from 'debug';
import config from './config';

export default (namespace: string) => debug(namespace ? `${config.APP_NAME}:${namespace}` : config.APP_NAME);
