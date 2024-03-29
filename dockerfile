FROM node:20.10.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .env .env
COPY . .

EXPOSE 3000

CMD [ "npm","run","prod"]