const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Shayan786%',
    database: 'postgres'
});

client.connect();
client.query(`select * from user`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
});
