FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY server.js .
COPY liquidacion_IEA_v4_29.html .
CMD ["node", "server.js"]
