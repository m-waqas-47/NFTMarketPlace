const client = require('./config');

const execute = async (query) => {
    try {
        await client.connect();     // gets connection
        await client.query(query);  // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();         // closes connection
    }
};

const query = `
    DROP TABLE IF EXISTS "books";`;

execute(query).then(result => {
    if (result) {
        console.log('Table Droped');
    }
});