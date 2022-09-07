FROM alpine

LABEL maintainer "Nemo <docker@captnemo.in>"

RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      npm

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
    CHROME_BIN=/usr/bin/chromium-browser

# Add user so we don't need --no-sandbox.
RUN addgroup -S pptruser && adduser -S -G pptruser pptruser \
    && addgroup pptruser audio \
    && addgroup pptruser video \
    && mkdir -p /home/pptruser/Downloads /app \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /app

USER pptruser

WORKDIR /app

COPY --chown=pptruser package.json package-lock.json /app/

RUN npm install

COPY --chown=pptruser index.js server.js prom.js *.md /app/

ENTRYPOINT ["/usr/bin/node", "server.js"]

EXPOSE 3000

HEALTHCHECK --interval=1m --timeout=5s \
    CMD wget -q http://localhost:3000/ || exit 1
