import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
app.use(cookieParser);

const server = (PORT) => {
	app.listen(PORT, () => {
		console.log(`http://localhost:${PORT}`);
	});
};
export default server;
