import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();


async function main() {
    const categories = await prisma.category.createMany({
        data: [
            { name: 'Головна' },
            { name: 'Смартфони' },
            { name: 'Ноутбуки' },
            { name: 'Планшети' },
            { name: 'Аксесуари' },
        ],
    });

    const products = await prisma.product.createMany({
        data: [
            {
                name: 'iPhone 13 Pro',
                description: 'Смартфон Apple iPhone 13 Pro з 6.1-дюймовим дисплеєм, процесором A15 Bionic, потрійною камерою та підтримкою 5G.',
                price: 999,
                media: 'https://example.com/iphone13pro.jpg',
                categoryId: 2,
                popular: true,
                isNew: false,
            },
            {
                name: 'MacBook Pro 16',
                description: 'Ноутбук Apple MacBook Pro 16 з процесором M1 Pro, 16-дюймовим дисплеєм Retina, до 32 ГБ оперативної пам\'яті та до 4 ТБ зберігання.',
                price: 2499,
                media: 'https://example.com/macbookpro16.jpg',
                categoryId: 3,
                popular: true,
                isNew: false,
            },
            {
                name: 'iPad Air',
                description: 'Планшет Apple iPad Air з 10.9-дюймовим дисплеєм, процесором A14 Bionic, підтримкою Apple Pencil та Magic Keyboard.',
                price: 599,
                media: 'https://example.com/ipadair.jpg',
                categoryId: 4,
                popular: true,
                isNew: false,
            }
        ],
    });
}

main()