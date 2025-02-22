FROM node:18

WORKDIR /app

COPY package.json . 

RUN npm install

COPY . .

# Sunucu başlatma komutu
CMD ["node", "server.js"]
