import { client } from '../client/client';

async function main() {
    const mainCategory = await client.category.create({
        data: { name: 'Головна' },
    });

    const smartphonesCategory = await client.category.create({
        data: { name: 'Смартфони' },
    });

    const laptopsCategory = await client.category.create({
        data: { name: 'Ноутбуки' },
    });

    const tabletsCategory = await client.category.create({
        data: { name: 'Планшети' },
    });

    const accessoriesCategory = await client.category.create({
        data: { name: 'Аксесуари' },
    });

    await client.product.createMany({
        data: [
            {
                name: 'iPhone 13 Pro',
                description:
                    'Смартфон Apple iPhone 13 Pro з 6.1-дюймовим дисплеєм, процесором A15 Bionic, потрійною камерою та підтримкою 5G.',
                price: 999,
                media: 'https://example.com/iphone13pro.jpg',
                count: 22,
                discount: 0,
                categoryId: smartphonesCategory.id,
                popular: true,
                isNew: false,
            },
            {
                name: 'MacBook Pro 16',
                description:
                    "Ноутбук Apple MacBook Pro 16 з процесором M1 Pro, 16-дюймовим дисплеєм Retina, до 32 ГБ оперативної пам'яті та до 4 ТБ зберігання.",
                price: 2499,
                media: 'https://example.com/macbookpro16.jpg',
                count: 22,
                discount: 0,
                categoryId: laptopsCategory.id,
                popular: true,
                isNew: false,
            },
            {
                name: 'iPad Air',
                description:
                    'Планшет Apple iPad Air з 10.9-дюймовим дисплеєм, процесором A14 Bionic, підтримкою Apple Pencil та Magic Keyboard.',
                price: 599,
                media: 'https://example.com/ipadair.jpg',
                count: 22,
                discount: 0,
                categoryId: tabletsCategory.id,
                popular: true,
                isNew: false,
            },
        ],
    });

    console.log('Seeding completed');
}

main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await client.$disconnect();
    });