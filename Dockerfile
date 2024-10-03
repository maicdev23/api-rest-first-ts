FROM node:20-alpine

WORKDIR /var/www

COPY package*.json ./

RUN npm install

RUN npm install --save-dev typescript

COPY . /var/www

RUN npm run build

RUN npm prune --production

CMD [ "npm", "start" ]