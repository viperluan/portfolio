# BUILD SITE
FROM node:18-alpine3.18 as portfolio

WORKDIR /app

COPY . .

RUN npm install && npm run build

# NGINX 
FROM nginx:latest

WORKDIR /app/www

COPY --from=portfolio /app/dist .

COPY nginx/my_nginx.conf /etc/nginx/sites-available/
COPY nginx/nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /etc/nginx/sites-enabled/\
  && ln -s /etc/nginx/sites-available/my_nginx.conf /etc/nginx/sites-enabled/

CMD ["nginx", "-g", "daemon off;"]
