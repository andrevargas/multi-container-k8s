FROM node:alpine

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn --prod

COPY . .

RUN yarn build

FROM nginx:alpine

EXPOSE 3000

COPY --from=0 /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf