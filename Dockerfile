# Stage 1: Build Stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock to the container
COPY package*.json ./
# If using yarn, use:
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# If using yarn, use:
# RUN yarn install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the application
RUN npm run build
# If using yarn, use:
# RUN yarn build

# Stage 2: Production Stage
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]


FROM --platform=linux/amd64 nginx:latest AS early

WORKDIR /usr/share/nginx/html

COPY indexEarly.html indexEarly.html