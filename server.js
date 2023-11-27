const app = require('./app');

const {connectDBs} = require('./db/index');

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5011
const PORT = process.env.PORT || 5011;

connectDBs().then(() => {
	app.listen(PORT, () => {
		console.log(`Server listening on http://localhost:${PORT}`);
	});
});
