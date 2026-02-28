// import { PrismaClient } from "../generated/prisma";
import { client } from '../client/client';

//  const prisma = new PrismaClient();


async function main() {
    // try {
    //     return await client.category.createMany({
    //     data: [
    //         { name: 'Головна' },
    //         { name: 'Смартфони' },
    //         { name: 'Ноутбуки' },
    //         { name: 'Планшети' },
    //         { name: 'Аксесуари' },
    //     ],
    // });
    // } catch (error) {
    //     console.log(error)
    // }
    
    try {
            const products = await client.product.createMany({
        data: [
            {
                name: 'iPhone 13 Pro',
                description: 'Смартфон Apple iPhone 13 Pro з 6.1-дюймовим дисплеєм, процесором A15 Bionic, потрійною камерою та підтримкою 5G.',
                price: 999,
                media: 'https://example.com/iphone13pro.jpg',
                count:22,
                discount: 0,
                categoryId: 2,
                popular: true,
                isNew: false,
            },
            {
                name: 'MacBook Pro 16',
                description: 'Ноутбук Apple MacBook Pro 16 з процесором M1 Pro, 16-дюймовим дисплеєм Retina, до 32 ГБ оперативної пам\'яті та до 4 ТБ зберігання.',
                price: 2499,
                media: 'https://example.com/macbookpro16.jpg',
                categoryId: 2,
                count:22,
                discount: 0,
                popular: true,
                isNew: false,
            },
            {
                name: 'iPad Air',
                description: 'Планшет Apple iPad Air з 10.9-дюймовим дисплеєм, процесором A14 Bionic, підтримкою Apple Pencil та Magic Keyboard.',
                price: 599,
                media: 'https://example.com/ipadair.jpg',
                categoryId: 3,
                count:22,
                discount: 0,
                popular: true,
                isNew: false,
            }
        ],
    });
    } catch (error) {
        console.log(error)
    }

}

main()