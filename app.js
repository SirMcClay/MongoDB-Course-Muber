const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

mongoose.Promise = global.Promise;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
if (process.env.NODE_ENV !== 'test') {
	mongoose.connect('mongodb://localhost/muber', options);
}

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
	res.status(422).send({ error: err._message });
});

module.exports = app;
