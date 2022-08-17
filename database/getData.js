const { client } = require('./config');
client.connect((err, client, done) => {
    if (err) throw err;
    client.query('SELECT * FROM  users', (err, res) => {
        if (err)
            console.log(err.stack);
        else {
            console.log(res.rows);
        }
        cleint.end()
    })
})