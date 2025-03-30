FROM node:22.14.0-alpine

WORKDIR /home/frontend

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
