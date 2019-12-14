FROM node:10.16.3
WORKDIR /app
COPY package.json ./app
RUN npm install 
COPY . ./app
CMD ["npm" , "run","dev"]
