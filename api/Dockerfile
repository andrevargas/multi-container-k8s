FROM node:alpine

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn --prod

COPY . .

CMD [ "yarn", "start" ]