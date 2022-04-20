FROM nginx:latest

MAINTAINER Jounghu <2500563965@qq.com>

RUN rm /etc/nginx/conf.d/default.conf

ADD ./app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
