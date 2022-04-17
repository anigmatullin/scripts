import process from 'process';
import 'dotenv/config'

import { DataSource } from "typeorm"
import { Maillog } from "./models/Maillog"

console.log(process.env);

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: +(process.env.DB_PORT || 3306),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    // entities: [ './models/*.ts'  ],
    entities: [Maillog]
})

const item = new Maillog();

item.helo_name = 'localdomain';
item.src_ip = '127.0.0.1';
item.src_port = 55123;
item.sender = 'sender@localhost';
item.recipients = 'dest@localhost';

async function main()
{
    await AppDataSource.initialize();
    const logRepository = AppDataSource.getRepository(Maillog);

    await logRepository.save(item);
    console.log(await logRepository.count());
    const logs = await logRepository.find()
    console.log(logs[0].sender);

    logs.forEach((val) => {
        console.log(val.helo_name);
    });

    AppDataSource.destroy();
}

main();

