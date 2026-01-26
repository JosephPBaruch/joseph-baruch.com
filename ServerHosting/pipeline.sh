#!/bin/bash
set -e

# Build the Docker image with a temporary tag "myapp"
docker build -t myapp ..

# Tag the image for your local registry with the desired name
docker tag myapp localhost:5000/josephbaruch.com:latest

# Push the image to your local Docker registry
docker push localhost:5000/josephbaruch.com:latest

