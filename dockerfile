# syntax=docker/dockerfile:1
FROM node:14-alpine

WORKDIR /build-history-layout

ENV PATH /build-history-layout/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . ./

CMD ["npm", "start"]
