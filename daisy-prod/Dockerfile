FROM node:25-bookworm AS build

RUN mkdir /pruebaapp
WORKDIR /pruebaapp

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#Parte 2 donde se crea el container de NGINX
FROM nginx:alpine

COPY --from=build /pruebaapp/dist/daisy-prod/browser /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
