# BUILD
FROM node:24.12.0-alpine AS build

WORKDIR /app

COPY . .

RUN npm install && npm run build

# NGINX
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/my_nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
