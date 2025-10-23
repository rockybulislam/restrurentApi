import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import itemRouter from '../src/routes/itemsRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/v1/', itemRouter);
app.use('/api/v1/', orderRouter);

const server = (PORT) => {
	app.listen(PORT, () => {
		console.log(`http://localhost:${PORT}`);
	});
};
export default server;
