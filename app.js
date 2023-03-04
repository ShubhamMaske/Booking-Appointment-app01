const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const db = require('./util/database');

const cors = require('cors');

const app = express();

app.use(cors());

const userRoutes = require('./routes/userroute');





app.use(bodyParser.json({ extended: false }));

app.use('/user',userRoutes);





db.sync()
    .then(result => {
        //console.log(result);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })

