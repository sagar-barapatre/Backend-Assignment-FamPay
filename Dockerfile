FROM node:alpine

WORKDIR /usr/src

COPY package*.json .

RUN npm ci

WORKDIR /usr/src/app

COPY . .

CMD ["npm","start"]
