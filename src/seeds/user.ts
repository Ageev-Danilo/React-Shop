import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();


async function main() {
    const [, , name, password] = process.argv;

    if (!name || !password) {
        console.error('Usage: npm run user <name> <password>');
        process.exit(1);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email: `${name.toLowerCase()}@drones.com`,
            password: hashedPassword,
        },
    });

    console.log('Created user:', user);
}

main();