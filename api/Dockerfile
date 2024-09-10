# Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000
CMD [ "node", "server.js" ]

#build command: docker build -t supermongol/hello-world-k8s-api .