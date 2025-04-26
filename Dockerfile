# official Node.js base image
FROM node:18-alpine

#setting up working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

#install dependencies
RUN npm install

#Copy the rest of app's source code
COPY . .

#Exposing the port the app listens on
EXPOSE 3000

#Start the application
CMD ["node", "index.js"]
