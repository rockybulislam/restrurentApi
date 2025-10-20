import prisma from '../config/database.config.js';

//   id         Int         @id @default(autoincrement())
//   table     Table       @relation(fields: [tableId], references: [id])
//   tableId   Int
//   status     OrderStatus @default(PENDING)
//   items      OrderItem[]
//   totalPrice Float
//   createdAt  DateTime    @default(now())
//   updatedAt  DateTime    @updatedAt

export const makeOrder = async (req, res) => {
	try {
		const { tableId, items } = req.body;
		const itemIds = items.map((i) => i.itemId);
		const dbItems = await prisma.item.findMany({
			where: { id: { in: itemIds } },
			select: { id: true, price: true },
		});

		const priceMap = Object.fromEntries(dbItems.map((i) => [i.id, i.price]));

		for (const item of items) {
			if (priceMap[item.itemId] !== item.price) {
				return res.status(400).json({
					error: `Price mismatch for item ${item.itemId}: expected ${priceMap[item.itemId]}, got ${item.price}`,
				});
			}
		}
		const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
		const newOrder = await prisma.order.create({
			data: {
				tableId,
				items: {
					create: items.map((i) => ({
						itemId: i.itemId,
						quantity: i.quantity,
						price: i.price,
					})),
				},
				totalPrice,
			},
			include: { items: true },
		});
		return res.send(newOrder);
	} catch (error) {
		return res.send(error);
	}
};
