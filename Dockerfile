
FROM node:18-alpine

WORKDIR /blackcow-matchmaker-backend


COPY .ㅅ .


RUN npm install
CMD ["node", "src/app.js"]
