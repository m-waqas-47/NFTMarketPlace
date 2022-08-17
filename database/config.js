const { Client } = require('pg');

module.exports = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'postgres_test_db',
    password: 'password',
    port: 5432,
})

// module.exports = { client };

// const execute = async (query) => {
//     try {
//         await client.connect();     // gets connection
//         await client.query(query);  // sends queries
//         return true;
//     } catch (error) {
//         console.error(error.stack);
//         return false;
//     } finally {
//         await client.end();         // closes connection
//     }
// };

// const text = `
//     CREATE TABLE IF NOT EXISTS "users" (
// 	    "id" SERIAL,
// 	    "name" VARCHAR(100) NOT NULL,
// 	    "role" VARCHAR(15) NOT NULL,
// 	    PRIMARY KEY ("id")
//     );`;

// execute(text).then(result => {
//     if (result) {
//         console.log('Table created');
//     }
// });