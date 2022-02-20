FROM node:17-alpine

COPY . .

RUN npm install

EXPOSE 8080

ENV SERVER_PORT=8080

ENV SERVER_HOST=localhost

RUN ["npx", "prisma", "generate"]

CMD ["npm", "start"]
