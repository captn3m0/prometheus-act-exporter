FROM alekzonder/puppeteer:1

LABEL maintainer Nemo <docker@captnemo.in>

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY index.js server.js /app/

ENTRYPOINT ["/usr/bin/node", "server"]

EXPOSE 3000