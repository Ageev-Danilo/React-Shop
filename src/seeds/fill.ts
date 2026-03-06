import { client } from '../client/client';

async function main() {
    const mainCategory = await client.category.create({
        data: { name: 'Головна' },
    });

    const laptopsCategory = await client.category.create({
        data: { name: 'Ноутбуки' },
    });

    const accessoriesCategory = await client.category.create({
        data: { name: 'Аксесуари' },
    });

    await client.product.createMany({
        data: [
            {
                name: 'iPhine 93 Pro',
                description:
                    'Смартфон Apple iPhone 13 Pro з 6.1-дюймовим дисплеєм, процесором A15 Bionic, потрійною камерою та підтримкою 5G.',
                price: 19,
                media: 'https://example.com/iphone13pro.jpg',
                count: 12,
                discount: 0,
                categoryId: mainCategory.id,
                popular: true,
                isNew: false,
            },
            {
                name: 'MacBik Pro 34',
                description:
                    "Ноутбук Apple MacBook Pro 16 з процесором M1 Pro, 16-дюймовим дисплеєм Retina, до 32 ГБ оперативної пам'яті та до 4 ТБ зберігання.",
                price: 24989,
                media: 'https://example.com/macbookpro16.jpg',
                count: 22,
                discount: 0,
                categoryId: laptopsCategory.id,
                popular: true,
                isNew: false,
            },
            {
                name: 'iPad Air 224',
                description:
                    'Планшет Apple iPad Air з 10.9-дюймовим дисплеєм, процесором A14 Bionic, підтримкою Apple Pencil та Magic Keyboard.',
                price: 5699,
                media: 'https://example.com/ipadair.jpg',
                count: 20,
                discount: 0,
                categoryId: laptopsCategory.id,
                popular: true,
                isNew: false,
            },
        ],
    });

    const user = await client.user.create({
        data: {
            name: 'John',
            email: 'john@drones.com',
            password: 'hashedpassword',
            confirmPassword: 'hashedpassword',
        },
    });

    const product = await client.product.findFirst({
        where: { name: 'iPhine 93 Pro' },
    });

    const contact = await client.contactData.create({
        data: {
            firstName: 'John',
            phoneNumber: '+380123456789',
            user: {
                connect: { id: user.id }
            },
        },
    });

    const order = await client.order.create({
        data: {
            userId: user.id,
            contactDataId: contact.id,
            payment: 'card',
            deliveryStatus: 'pending',
            totalPrice: 500,
        },
    });

    await client.productOnOrder.create({
        data: {
            orderId: order.id,
            productId: product!.id,
            count: 1,
        },
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
