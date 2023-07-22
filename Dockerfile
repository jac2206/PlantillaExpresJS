# --------------> The build image
FROM node:16-alpine AS build
RUN npm set strict-ssl false
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install

# --------------> The production image
FROM node:16-alpine
RUN npm set strict-ssl false
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app

ARG PORT
ARG NODE_ENV
ARG AXIOS_HTTP_TIMEOUT
ARG CORS_ORIGINS
ARG NEW_RELIC_KEY
ARG HSTS_MAX_AGE
ARG APIGATEWAY_BASE_URL
ARG APIGATEWAY_URL_BEARER_TOKEN
ARG APIGATEWAY_CA_CHANNEL
ARG APIGATEWAY_PASSPHRASE
ARG APIGATEWAY_PFX_PATH
ARG APIGATEWAY_CLIENT_ID
ARG APIGATEWAY_CLIENT_SECRET
ARG POS_SHORT_BALANCE
ARG SPLUNK_BASE_URL
ARG SPLUNK_AUDIT_PATH
ARG SPLUNK_TOKEN
ARG SPLUNK_INDEX
ARG SPLUNK_SOURCE
ARG AWS_REGION
ARG POSTGRES_DIALECT
ARG POSTGRES_HOST
ARG POSTGRES_PORT
ARG POSTGRES_USER
ARG POSTGRES_PASS

ENV PORT=${PORT}
ENV NODE_ENV=${NODE_ENV}
ENV AXIOS_HTTP_TIMEOUT=${AXIOS_HTTP_TIMEOUT}
ENV CORS_ORIGINS=${CORS_ORIGINS}
ENV NEW_RELIC_KEY=${NEW_RELIC_KEY}
ENV HSTS_MAX_AGE=${HSTS_MAX_AGE}
ENV APIGATEWAY_BASE_URL=${APIGATEWAY_BASE_URL}
ENV APIGATEWAY_URL_BEARER_TOKEN=${APIGATEWAY_URL_BEARER_TOKEN}
ENV APIGATEWAY_CA_CHANNEL=${APIGATEWAY_CA_CHANNEL}
ENV APIGATEWAY_PASSPHRASE=${APIGATEWAY_PASSPHRASE}
ENV APIGATEWAY_PFX_PATH=${APIGATEWAY_PFX_PATH}
ENV APIGATEWAY_CLIENT_ID=${APIGATEWAY_CLIENT_ID}
ENV APIGATEWAY_CLIENT_SECRET=${APIGATEWAY_CLIENT_SECRET}
ENV POS_SHORT_BALANCE=${POS_SHORT_BALANCE}
ENV SPLUNK_BASE_URL=${SPLUNK_BASE_URL}
ENV SPLUNK_AUDIT_PATH=${SPLUNK_AUDIT_PATH}
ENV SPLUNK_TOKEN=${SPLUNK_TOKEN}
ENV SPLUNK_INDEX=${SPLUNK_INDEX}
ENV SPLUNK_SOURCE=${SPLUNK_SOURCE}
ENV AWS_REGION=${AWS_REGION}
ENV POSTGRES_DIALECT=${POSTGRES_DIALECT}
ENV POSTGRES_HOST=${POSTGRES_HOST}
ENV POSTGRES_PORT=${POSTGRES_PORT}
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASS=${POSTGRES_PASS}

CMD ["npm", "start"]