import prisma from '../config/database.config.js';

//get all items
export const getItems = async (_, res) => {
	const items = await prisma.item.findMany();
	res.send(items);
};
export const getItem = async (req, res) => {
	try {
		const { id } = req.params;
		const item = await prisma.item.findUnique({
			where: { id: Number(id) },
		});

		if (!item) {
			return res.status(404).json({ error: 'Item not found' });
		}

		res.json(item);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
//create one item
export const createItem = async (req, res) => {
	try {
		const { name, price, category } = req.body;
		if (!name || !price || !category) {
			return res.send('please fill all field');
		}
		const newItem = await prisma.item.create({
			data: {
				name,
				price,
				category,
			},
		});
		return res.send(newItem);
	} catch (error) {
		res.send(error.message);
	}
};
//update item
export const updateItem = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, price, category } = req.body;
		Number(price);

		const updatedItem = await prisma.item.update({
			where: { id: Number(id) },
			data: { name, price, category },
		});

		res.json(updatedItem);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
