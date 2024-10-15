FROM node:20-alpine
WORKDIR /app

COPY package.json .
COPY .env .

RUN npm i -g serve

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD [ "serve", "-s", "dist" ]