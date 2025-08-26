
require('dotenv').config()
const mongoose = require('mongoose'); // import mysql2 module for database connection

const dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];


const connection = async () => {
       
        await mongoose.connect(process.env.DB_URI);
        const state = Number(mongoose.connection.readyState);
        console.log("connect db: ", dbState.find(f => f.value == state).label, "to db"); // connected to db
    
}

module.exports = connection; // export the connection to use in other files