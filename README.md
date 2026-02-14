![demo picture](https://www.figma.com/design/hClVyiitXdrPCzTV12sMwK/Shop--Copy-?node-id=315-20184&t=DkOdQx5s4Ewa1blt-0)
# REACTJS PROJECT: **SHOP HAPI HAPI**

**Hapi hapi** — інтерактивний веб-додаток інтернет-магазин з можливістю оформлення замовлень, управління товарами та користувацькими профілями.

### Технології проекту:
- **Node.js**, **Express** та **TypeScript** — Серверна частина.
- **Prisma ORM** — робота з базою даних.
<details>
    <summary>Натисніть, щоб побачити опис технологій цього проекту</summary>
    
    1. Node.js - багатофункціональне середовище виконання JavaScript. Використовується для створення backend-логіки та асинхронної роботи (наприклад, запити до бази даних).Без цього компонента неможливе запуск серверної частини програми

    2. Express - Гнучкий фреймворк для створення HTTP-серверів та API поверх Node.js. Використовується для маршрутизації запитів, їх подальшої обробки та повернення відповіді. Також фреймворк дозволяє використовувати конструкцію middleware та надає можливість роботи з бібліотекою React. Є інструментом для структуризації серверного коду

    3. TypeScript - Надбудова над JavaScript, яка додає строгу типізацію даних для уникнення можливих помилок валідації на стадії розробки. Спрощує підтримку та масштабування великих проектів. 

    4. Prisma ORM - сучасна ORM/бібліотека для роботи з базами даних (PostgreSQL, MySQL, SQLite та ін.). Додає можливість створення та видалення моделей даних за принципом міграцій. Спрощує використання CRUD – операцій.


</details>




### Навігація
[Структура проекта](#структура-проекта) · 
[Архітектура](#архітектура) · 
[Стиль коду](#стиль-коду)  · 
[Як запустити проект](#як-запустити-проект)
---

### Структура проекту
<details> 
    <summary>Натисніть, щоб побачити пояснення до структури цього проекту</summary>
    
    src - Папка, в якій знаходяться усі модулі цієї програми.

    prisma - Папка, в якій знаходятся усі моделі для зберігання даних

    package.json - файл, в якому перелічено всі необхідні модулі для роботи програми

    tsconfig.json - файл, необхідний для коректної роботи node.js

    prisma.config.ts - файл, необхідний для коректної роботи prisma ORM

</details>

<details>
    <summary>Натисніть, щоб побачити пояснення кожного файла окремого модулю у папці src</summary>
        
        1. router - відповідає за отримання запитів та їх передачу до контролера   

        2. controller - відповідає за обробку та валідацію запиту, отримує дані із сервера та складає відповідь  

        3. service - відповідає за реалізацію бізнес-логіки програми, тобто її головні завдання  

        4. repository - надає доступ до роботи з базою даних  

        5. types - відповідає за строгу типізацію даних, струкуризує отримані функціями дані та їх відповідь  

</details>

### Шарова структура

Проект базується на основі **шаровоої архітектури**. Шарова архітектура це спосіб організації коду, при якому:

1. - Додаток ділиться на окремі шари, де кожен шар відповідає за своє завдання. 
2. - Таким чином, не відбувається втручання завдань в інші рівні. Кожна частина логічна та ізольована.

### Архітектура

Архітектура додатка базується на принципах **MVC** (Model-View-Controller). Взаємодія між компонентами додатка виглядає наступним чином:

1. **Model (Модель)** — модель даних, яка представлена схемами в Prisma. Ці моделі відповідають таблицям у базі даних і включають опис полів, зв'язків та обмежень.
2. **View (Представлення)** — оскільки в серверній частині проєкту відсутній фронтенд, представленням можуть бути дані, які API повертає клієнту.
3. **Controller (Контролер)** — файли, що обробляють запити від клієнта (наприклад, створення нового замовлення) та відповідають клієнту.

### API-мітки:

<details>
<summary>💻 User Module</summary>

## 🔐 Auth Module

### Login — POST `/login`

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Successful login | `{ id: number, name: string, email: string }` |
| 401 | Email is missing | Error message |
| 401 | Password is missing | Error message |
| 500 | Server error | Error message |

---

### Registration — POST `/register`

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Successful registration | `{ id: number, name: string, email: string }` |
| 401 | Passwords do not match | Error message |
| 401 | Email is missing | Error message |
| 401 | Password is missing | Error message |
| 500 | Server error | Error message |

---

### Password Upload — PATCH `/password_upload`

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Password successfully updated | `{ id: number, name: string, email: string }` |
| 401 | Passwords do not match | Error message |
| 401 | Email is missing | Error message |
| 401 | Password is missing | Error message |
| 500 | Server error | Error message |

---

## 👤 Cabinet

---

### 📇 Contact Information

#### Get profile — GET `/users/profile`

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | User profile data | `{ id: number, name: string, email: string, phone?: string }` |
| 401 | Unauthorized | Error message |
| 500 | Server error | Error message |

#### Update profile — PATCH `/users/profile`

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Profile successfully updated | `{ id: number, name: string, email: string, phone?: string }` |
| 401 | Unauthorized | Error message |
| 500 | Server error | Error message |

---

### 📦 Delivery

#### Get products — GET `/users/orders`

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | List of user products | `[{ id: number, productId: number, quantity: number, status: string }]` |
| 401 | Unauthorized | Error message |
| 500 | Server error | Error message |

#### Delete product — DELETE `/users/orders/:orderId`

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Product successfully deleted | Success message |
| 401 | Unauthorized | Error message |
| 404 | Order not found | Error message |
| 500 | Server error | Error message |

---

### 🏠 Delivery Address

#### Get addresses — GET `/users/addresses`

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | List of delivery addresses | `[{ id: number, city: string, street: string, house: string }]` |
| 401 | Unauthorized | Error message |
| 500 | Server error | Error message |

#### Update address — PATCH `/users/addresses`

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Address successfully updated | `{ id: number, city: string, street: string, house: string }` |
| 401 | Unauthorized | Error message |
| 404 | Address not found | Error message |
| 500 | Server error | Error message |

#### Create address — POST `/users/addresses`

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Address successfully created | `{ id: number, city: string, street: string, house: string }` |
| 401 | Unauthorized | Error message |
| 500 | Server error | Error message |

</details>

<details>
<summary>📦 Product Module</summary>

#### GET "/products"

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Ok | `[{ id: number, name: string, price: number, categoryId: number }]` |
| 500 | Server error | Error message |

#### GET "/products/id"

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Ok | `{ id: number, name: string, price: number, categoryId: number }` |
| 404 | Product not found | Error message |
| 500 | Server error | Error message |

#### GET "/products/popular"
| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Popular products | `[{ id: number, name: string, price: number }]` |

#### GET "/products/new"
| Status code | Description | Response |
|------------|-------------|----------|
| 200 | New items | `[{ id: number, name: string, price: number }]` |

#### GET "/products/:id/similar"
| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Similar products | `[{ id: number, name: string, price: number }]` |
| 404 | Product not found| Error message |

</details>

<details>
<summary>🗂 Category Module</summary>

#### GET "/categories"

| Status code | Description | Response |
|------------|-------------|----------|
| 200 | Ok | `[{ id: number, name: string }]` |
| 500 | Server error | Error message |

</details>

**Взаємодія з базою даних:**
- За допомогою **Prisma** додаток взаємодіє з базою даних, використовуючи моделі, описані у файлі `schema.prisma`.
- Кожне змінення в базі даних (наприклад, створення нового товару чи замовлення) здійснюється через Prisma-міграції, що спрощує роботу з SQL-запитами.

**Масштабованість:**
- Проєкт спроектовано так, щоб було легко додавати нові функціональні можливості та масштабувати додаток. Наприклад, можна додавати нові сервіси чи додаткові моделі в Prisma без значних змін у структурі коду.

### Стиль написання коду

Код у проєкті написано за допомогою **TypeScript**, що дозволяє отримати переваги типізації та уникнути багатьох помилок на етапі розробки.

У цьому проекті є логічні правила, за допомогою яких відбувається структуризація та **неймінг** файлів. Наприклад:

1. Усі файли називаються через точку, приклад: name.name.ts

2. Усі компоненти називаються з великої літери, приклад: Name.tsx

3. Усі функції і константи називаються за принципом **camelCase**, приклад: nameName(){}

### Як запустити проект

<details>
    <summary>Натисніть, щоб побачити пошагову інструкцію для запуску проекту</summary>

    1. Скопіюйте проект у свою локальну папку  - git clone посилання на наш проект

    2. Перейдіть до потрібної папки за допомогою терміналу - cd group_project

    3. Використовуйте вбудовані скрипти для роботи з проектом

        react-scripts start - запуск проекту
        react-scripts build - складання програми в один файл
        react-scripts test - запуск тестів
        react-scripts eject - прибирає функцію create-react-app


</details>

### Робота команди

В роботі проєкту брали участь:

- [Ageev Danilo (Teamlead)](https://github.com/Ageev-Danilo)
- [Artem Svistun](https://github.com/asvistun5)
- [Daniil Kolomoec](https://github.com/Daniil-Kolomoec)
