import express from 'express';
import { makeOrder } from '../controllers/orderControllers.js';

const orderRouter = express.Router();

orderRouter.post('/order', makeOrder);

export default orderRouter;
