# Учебный Проект: Простая регистрация 

## Введение

Этот проект - простое учебное веб-приложение, созданное для демонстрации процесса регистрации пользователя и взаимодействия с базой данных для создания учетных записей.

## Требования

- Node.js

## Установка

1. Клонировать репозиторий:

```bash
git clone  https://github.com/TimofeyKorzh/STOproject2.git
```

```bash
cd STOproject2
```

2. Установить компоненты:

```bash
cd frontend
npm install .
```

```bash
cd backend
npm install .
```

## Запуск

1. Запустить PostgreSQL на порту 5432

2. Запустить сервер:

```bash
cd backend
npm run start
```
!**ВНИМАНИЕ**
В случае ошибки при запуске сервера, необходимо запустить сервер ещё один или два раза. В таком случае все необходимые таблицы будут созданы в базе данных.

3. Перейти по адресу `http://localhost:3000` в браузере.

## Внесение изменений в frontend

1. Внести изменения в файлы в папке frontend/src

2. Собрать проект:

```bash
cd frontend
ng build
```
3. Скопировать содержимое папки `frontend\dist\angular-registration-login-example` в папку `backend/public`

## Использованные материалы

- [Angular 7 - User Registration and Login Example & Tutorial](https://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial) - Основа создания фронтенда, но без разработки связи с бекендом, и без проверок валидности данных
- [Гибкая ORM для Node.js – Sequelize](https://proglib.io/p/gibkaya-orm-dlya-node-js-sequelize-2022-10-12) - Туториал по работе с Sequelize и связи с базой данных PostgreSQL
- [Введение в Express и Node.js](https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/Introduction) - Туториал по работе с Express.js
- [Serving static files in Express](https://expressjs.com/en/starter/static-files.html) - способ запускать собранное приложение Angular вместе с бекендом