const mongoose = require('mongoose');

before((done) => {
	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	mongoose.connect('mongodb://localhost/muber_test', options);
	mongoose.connection
		.once('open', () => done())
		.on('error', (err) => {
			console.warn('Warning', error);
		});
});
