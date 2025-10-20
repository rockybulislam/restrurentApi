import express from 'express';
import { createitem } from '../controllers/itemControllers.js';

const itemRouter = express.Router();

// itemRouter.get('/', getItem);
itemRouter.post('/item', createitem);

export default itemRouter;
