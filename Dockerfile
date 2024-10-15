FROM node:20-alpine
WORKDIR /app

COPY package.json .
COPY .env .

RUN npm i -g serve

RUN npm install

COPY . .

RUN npm run build


FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html