import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

// ke7UR3A1BfZXti6Y
// admin-um

async function main() {
	try {
		await mongoose.connect(config.database_url as string);
		app.listen(config.port, () => {
			console.log(`Example app listening on port ${config.port as string}`);
		});
	} catch (err) {
		console.log(err);
	}
}
