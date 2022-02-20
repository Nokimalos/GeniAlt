FROM node:17-alpine

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV SERVER_PORT=3000

ENV SERVER_HOST=localhost

CMD ["npm", "start"]
