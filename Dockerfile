#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:12.13.0 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./typechain ./typechain
COPY ./src ./src
RUN npm ci --quiet && npm run build

# TODO replace with yarn: https://stackoverflow.com/questions/58482655/what-is-the-closest-to-npm-ci-in-yarn



#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:12.13.0-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --quiet --only=production

# TODO replace with yarn: https://stackoverflow.com/questions/58482655/what-is-the-closest-to-npm-ci-in-yarn

## We just need the build to execute the command
COPY --from=builder /usr/src/app/dist ./dist
