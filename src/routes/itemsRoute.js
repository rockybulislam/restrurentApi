import express from 'express';
import {
	createItem,
	getItems,
	getItem,
	updateItem,
} from '../controllers/itemControllers.js';

const itemRouter = express.Router();

itemRouter.get('/items', getItems);

itemRouter.get('/item/:id', getItem);

itemRouter.post('/item', createItem);

itemRouter.put('/item/:id', updateItem);

export default itemRouter;
