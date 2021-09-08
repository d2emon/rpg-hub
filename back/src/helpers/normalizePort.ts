export default (value: any): number | boolean => {
    const port = parseInt(value, 10);

    if (port >= 0) {
        return port;
    }

    return false;
};
