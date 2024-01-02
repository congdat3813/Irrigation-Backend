ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-bullseye-slim AS builder

USER node

WORKDIR /home/node/app

COPY --chown=node package.json .

COPY --chown=node yarn.lock .

# Building the production-ready application code - alias to 'nest build'

RUN yarn install --frozen-lockfile

COPY --chown=node . .

RUN yarn build

FROM node:${NODE_VERSION}-bullseye-slim

USER node

WORKDIR /home/node/app

COPY --from=builder --chown=node /home/node/app/node_modules ./node_modules
# Copying the production-ready application code, so it's one of few required artifacts
COPY --from=builder --chown=node /home/node/app/dist ./dist
# COPY --from=builder --chown=node /home/node/app/public ./public
COPY --from=builder --chown=node /home/node/app/package.json .

CMD [ "node", "dist/main.js" ]