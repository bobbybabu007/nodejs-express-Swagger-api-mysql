FROM node:10-alpine

LABEL maintainer="Bobby Babu"

RUN apk --update --no-cache add \
        ca-certificates \
        git \
        openssh-client \
        openssl \
        python3\
        py3-pip \
        py3-cryptography \
        rsync \
        sshpass

RUN apk --update add --virtual \
        .build-deps \
        python3-dev \
        libffi-dev \
        openssl-dev \
        build-base \
        curl

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

COPY package*.json ./

USER node

RUN npm install && 

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "index.js" ]