# # Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /client

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built application from the builder stage
COPY --from=builder /client/dist /usr/share/nginx/html

# Ensure images and resume are copied to the correct location
# COPY --from=builder /client/src/pages/Assets/me.jpeg /usr/share/nginx/html/images/me.jpeg
# COPY --from=builder /client/src/pages/Assets/Resume.pdf /usr/share/nginx/html/resume/Resume.pdf

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8084
EXPOSE 8084

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]