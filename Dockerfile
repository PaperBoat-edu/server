# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install server dependencies
RUN npm install

# Copy the rest of your server application code to the container
COPY . .

# Expose the port your server will run on
EXPOSE 3000

# Command to start your server
CMD ["node", "app.js"]
