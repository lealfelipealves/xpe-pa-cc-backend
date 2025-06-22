FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3333

CMD ["npm", "run", "start:prod"]
