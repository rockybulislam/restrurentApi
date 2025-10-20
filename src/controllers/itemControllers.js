import prisma from '../config/database.config.js';

export const createitem = async (req, res) => {
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
