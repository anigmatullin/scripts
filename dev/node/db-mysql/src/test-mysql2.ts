import mysql from 'mysql2/promise';

let con = {
    host:'localhost',
    user: 'root',
    password: 'qaz123ZX',
    database: 'mail'
};

async function main() {
    // get the client
    // create the connection
    const connection = await mysql.createConnection(con);
    // query database
    const [rows, fields] = await connection.execute('SELECT * FROM Maillog');
    connection.end();

    console.log(typeof rows)

    console.log(rows);

    // for (let row in rows) {
    //     console.log(row.sender);
    // }
    
}

main();
