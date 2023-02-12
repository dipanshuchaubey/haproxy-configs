FROM node:16-alpine

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 80

CMD yarn start
