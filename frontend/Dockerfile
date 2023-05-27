# Установите базовый образ node:14
FROM node:14 as build-stage

# Установите рабочую директорию
WORKDIR /app

# Скопируйте файлы package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm ci

RUN npm install -g @angular/cli
# Скопируйте оставшиеся файлы проекта
COPY . .

# Соберите проект


CMD [ "ng", "serve", "--host", "0.0.0.0" ]
