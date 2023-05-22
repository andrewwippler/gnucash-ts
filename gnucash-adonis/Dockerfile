# From https://docs.adonisjs.com/cookbooks/dockerizing-adonis
ARG NODE_IMAGE=node:18-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .

FROM dependencies AS build
RUN node ace build --production

FROM base AS production
ENV HOST=0.0.0.0
ENV NODE_ENV=production
ENV PORT=3333
ENV APP_NAME=GnucashAdonisAPI
ENV APP_URL=http://${HOST}:${PORT}
ENV HASH_DRIVER=bcrypt
COPY --chown=node:node ./package*.json ./
RUN npm ci --omit=dev
COPY --chown=node:node --from=build /home/node/app/build .
EXPOSE 3333
CMD [ "dumb-init", "node", "server.js" ]
