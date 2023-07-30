'use strict';
const app = require('express')(),
	bodyParser = require('body-parser');


const PORT = process.env.PORT || 1500

const users = require('./routes/users');

app.use(bodyParser.urlencoded({extended: true}));


app.use('/users', users);

app.listen(PORT, () => console.log(`listening on port ${PORT} `));
