// const express = require('express');
// const path = require('path');
// // const router = require('./routes/userRoute')

// const app = express();

// app.use(express.static(path.join(__dirname,'./')));

// // app.use('/',router)

// app.listen(3080,() =>{
//     console.log(`working on port 3080`);
// })

const express = require('express');
const path = require('path');
const router = require('./routes/userRoute')

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use('/',router)

app.listen(3000,() =>{
    console.log("working on port 3050");
})