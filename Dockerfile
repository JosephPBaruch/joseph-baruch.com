# Use the official Node.js image as the base image
# Select a specific version for consistency
FROM node:18 

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

EXPOSE 8080

# Build the Vite application
# RUN npm run dev

ENTRYPOINT ["npm", "run", "dev"]
