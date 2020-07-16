# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/web/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install web dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 

# add web
COPY . ./

EXPOSE 8000

# start web
CMD ["npm", "start"]