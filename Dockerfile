FROM node:16-alpine

RUN mkdir /build

WORKDIR /build

COPY package.json yarn.lock  ./

RUN yarn install

COPY . .

RUN yarn build

ENV NODE_ENV production

EXPOSE 3000


