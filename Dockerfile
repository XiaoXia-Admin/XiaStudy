FROM nginx
WORKDIR /urs/share/nginx/html/
USER root

COPY ./dist  /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
