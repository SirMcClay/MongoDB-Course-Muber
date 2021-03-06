const mongoose = require('mongoose');

before((done) => {
	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	};
	mongoose.connect('mongodb://localhost/muber_test', options);
	mongoose.connection
		.once('open', () => done())
		.on('error', (err) => {
			console.warn('Warning', error);
		});
});

beforeEach((done) => {
	const { drivers } = mongoose.connection.collections;
	drivers
		.drop()
		.then(() => drivers.ensureIndex({ 'geometry.coordinates': '2dsphere' }))
		.then(() => done())
		.catch(() => done()); // this is for first test run - because drivers collection does not existis
});
