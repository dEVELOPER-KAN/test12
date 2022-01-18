require("dotenv").config();
const express = require('express');
const mongoose=require('mongoose');
const app = express();
const PORT = process.env.SERVER_PORT;

(async function () {
    const connection=await mongoose.connect(process.nextTick.DB_CONN,{});
    if(connection){
        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`)
            console.log(`DB Connected`)
        });
    }

    
})();
module.exports = app;