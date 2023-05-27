# Установите базовый образ node:12.20
FROM node:12.20

# Установите рабочую директорию
WORKDIR /app

# Скопируйте файлы package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте оставшиеся файлы проекта
COPY . .

# Откройте порт 3000
EXPOSE 3000

# Запустите приложение
CMD ["npm", "start"]
