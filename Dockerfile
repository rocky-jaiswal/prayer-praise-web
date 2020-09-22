FROM nginx:1.19-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
ADD . /usr/share/nginx/html
