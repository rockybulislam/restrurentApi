import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();
process.on('beforeExit', async () => {
	await prisma.$disconnect();
});
export default prisma;
