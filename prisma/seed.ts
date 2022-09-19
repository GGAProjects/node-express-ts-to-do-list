import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const statusesData: Prisma.TaskStatusCreateInput[] = [
	{
		status: "Pendiente"
	},
	{
		status: "En proceso"
	},
	{
		status: "Finalizado"
	},

]

async function main() {
	console.log(`Start seeding ...`)
	for (const statusData of statusesData) {
		const status = await prisma.taskStatus.create({
			data: statusData,
		})
		console.log(`Created user with id: ${status.id}`)
	}
	console.log(`Seeding finished.`)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
	})