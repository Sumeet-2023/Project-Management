FROM node:22.14.0-alpine

WORKDIR /apps/frontend

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000