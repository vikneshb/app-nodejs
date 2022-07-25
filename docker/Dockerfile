FROM node:latest

RUN apt-get update 

EXPOSE 4200

USER node

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm install -g @angular/cli
 
RUN npm install --save-dev @angular-devkit/build-angular --g --f