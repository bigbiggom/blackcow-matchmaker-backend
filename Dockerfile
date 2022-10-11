
FROM node:18-alpine

WORKDIR /blackcow-matchmaker-backend


COPY . .


#RUN node src/app.js
CMD ["node", "src/app.js"]
