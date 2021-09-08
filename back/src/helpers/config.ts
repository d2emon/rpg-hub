/**
 * Настройки для серверной части
 */

export interface Config {
    APP_NAME: string;
    // CLIENT_ID: string;
    // CLIENT_SECRET: string;
    MONGO_URI: string;
    PORT: string | number;
    // TOKEN_LIFETIME: string | number;
}

const config: Config = {
    APP_NAME: process.env.APP_NAME || 'august',
    // CLIENT_ID: process.env.CLIENT_ID || 'augustClient',
    // CLIENT_SECRET: process.env.CLIENT_SECRET || 'thereisnospoon',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/august',
    PORT: process.env.PORT || 4000,
    // TOKEN_LIFETIME: process.env.TOKEN_LIFETIME || (30 * 60),
};

export default config;
