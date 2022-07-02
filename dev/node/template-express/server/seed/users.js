const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

dotenv.config();


async function dbConnect(server)
{
    let con;
    console.log("Trying to connect to MongoDB");
    console.log(process.env.MONGO);

    try {
        //connect
        con = await mongoose.connect(process.env.MONGO);
    }
    catch (err) {
        console.error("MongoDB Connection failed");
        // console.error(err);
        return;
    }

    console.log("Connection successful!");

    // await mongoose.disconnect();
}


async function doWork()
{
    let con;
    console.log("Trying to connect to MongoDB");
    console.log(process.env.MONGO);

    try {
        //connect
        con = await mongoose.connect(process.env.MONGO);
    }
    catch (err) {
        console.error("MongoDB Connection failed");
        // console.error(err);
        return;
    }

    console.log("Connection successful!");

    let user1 = new User({
        name: "user1",
        email: "user1@example.com",
        password: bcrypt.hashSync("P@ssw0rd", 7),
    });

    let user2 = new User({
        name: "user2",
        email: "user2@example.com",
        password: bcrypt.hashSync("P@ssw0rd", 7),
    });


    let user3 = new User({
        name: "user3",
        email: "user3@example.com",
        password: bcrypt.hashSync("P@ssw0rd", 7),
    });

    console.log( await user1.save() );

    console.log( await user2.save() );

    console.log( await user3.save() );

    await mongoose.disconnect();
}

doWork();

// const con = mongoose.connect(process.env.MONGO)
//     .then(onsuccess)
//     .then(() => {
//         let user1 = new User({
//             name: "user1",
//             email: "user1@example.com",
//             password: "P@ssw0rd",
//         });

//         user1.save()
//             .then(() => console.log("saved"))
//             .catch((err) => console.log(err))
//     })
