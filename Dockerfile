FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
#RUN npm ci --force #&& npm install
COPY src src
RUN npm run build
EXPOSE 80
CMD ["npm", "run", "start"]
