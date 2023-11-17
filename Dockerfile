FROM node:21-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/plantilla-remaster-front-end/ /usr/share/nginx/html

EXPOSE 80
