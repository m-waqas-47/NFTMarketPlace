var express = require('express');
var app = express();
const client = require('./database/config');

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

const text = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL,
	    "name" VARCHAR(100) NOT NULL,
	    "role" VARCHAR(15) NOT NULL,
	    PRIMARY KEY ("id")
    );`;

app.get('/', function (req, res) {
  res.send('Hello World!');
  execute(text).then(result => {
    if (result) {
        console.log('Table created');
    }
});
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

