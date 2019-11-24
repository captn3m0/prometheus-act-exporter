FROM schliflo/docker-puppeteer:2.0.0

LABEL maintainer "Nemo <docker@captnemo.in>"

ARG BUILD_DATE
ARG VCS_REF

ENV CHROME_REVISION=706915

WORKDIR /app

# So I can copy it to the above variable
RUN ls "/usr/local/share/.config/yarn/global/node_modules/puppeteer/.local-chromium/"
# Ensure that the chromium path hasn't changed (this fails the build early)
RUN ls "/usr/local/share/.config/yarn/global/node_modules/puppeteer/.local-chromium/linux-$CHROME_REVISION/chrome-linux/chrome"

COPY package.json package-lock.json /app/

RUN npm install

LABEL org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.name="Prometheus ACT Exporter" \
      org.label-schema.vcs-url="https://git.captnemo.in/nemo/prometheus-act-exporter.git" \
      org.label-schema.url="https://git.captnemo.in/nemo/prometheus-act-exporter" \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.schema-version="1.0.0-rc1"

COPY index.js server.js prom.js *.md /app/

ENV CHROME_BIN="/usr/local/share/.config/yarn/global/node_modules/puppeteer/.local-chromium/linux-$CHROME_REVISION/chrome-linux/chrome"

ENTRYPOINT ["/usr/local/bin/node", "server.js"]

EXPOSE 3000
