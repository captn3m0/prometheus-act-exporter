FROM schliflo/docker-puppeteer:4.0.1

LABEL maintainer "Nemo <docker@captnemo.in>"

ARG BUILD_DATE
ARG VCS_REF

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

LABEL org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.name="Prometheus ACT Exporter" \
      org.label-schema.vcs-url="https://git.captnemo.in/nemo/prometheus-act-exporter.git" \
      org.label-schema.url="https://git.captnemo.in/nemo/prometheus-act-exporter" \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.schema-version="1.0.0-rc1"

COPY index.js server.js prom.js *.md /app/

ENTRYPOINT ["/usr/local/bin/node", "server.js"]

EXPOSE 3000
