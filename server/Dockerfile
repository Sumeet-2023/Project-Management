FROM node:22.11.0-alpine

WORKDIR /apps/backend

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 8000
