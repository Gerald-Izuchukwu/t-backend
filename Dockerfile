FROM node:current-slim

RUN mkdir /home/backend

WORKDIR /home/backend

COPY . /home/backend/

RUN npm install

EXPOSE 9600

CMD [ "node", "app.js" ]