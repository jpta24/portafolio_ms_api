const MONGO_URI =
	process.env.MONGODB_URI ||
	'mongodb://http://http://localhost:27017/portafolio';

module.exports = MONGO_URI;
