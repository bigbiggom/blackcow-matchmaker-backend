
FROM node:18-alpine

WORKDIR /blackcow-matchmaker-backend


COPY . .


RUN npm install
CMD ["node", "src/app.js"]
