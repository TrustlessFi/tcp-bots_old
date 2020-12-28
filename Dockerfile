FROM node:12.18.1

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn --production

COPY . .

ENTRYPOINT ["yarn", "run", "start_bot"]
