#!/bin/bash

set -e

# Default port
PORT=8080
REBUILD=false

# Function to display help
show_help() {
    echo "Usage: ./your-script.sh [OPTIONS]"
    echo
    echo "Options:"
    echo "  --rebuild              Force rebuild of the Docker image."
    echo "  --port <port>          Specify the port to expose the container (default is 8080)."
    echo "  --help                 Display this help message and exit."
    echo
    exit 0
}

rebuild(){
    # Image clean up
    if docker container ps | grep -q "frontend_container"; then
        docker stop frontend_container && docker rm frontend_container 
    fi

    # Container clean up
    if docker image ls | grep -q "frontend"; then
       docker rmi frontend
    fi

    docker build -t frontend .
    docker run -d -p $PORT:80 --name frontend_container frontend

}

no_rebuild(){
    # Check if the image should be rebuilt or if it doesn't exist
    if ! docker image ls | grep -q "frontend"; then
        echo "Building image"
        docker build -t frontend .
    else
        echo "Image already exists"
    fi

    # Check if the container is already running
    if ! docker container ps | grep -q "frontend_container"; then
        echo "Creating and running container on port $PORT"
        docker run -d -p $PORT:80 --name frontend_container frontend
    else
        echo "Container already exists"
    fi
}

# Parse command-line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --rebuild) REBUILD=true ;;
        --port) PORT="$2"; shift ;;
        --help) show_help ;;
        *) echo "Unknown parameter passed: $1"; show_help ;;
    esac
    shift
done

# Check if the image should be rebuilt or if it doesn't exist
if [ "$REBUILD" = true ];  then
   rebuild
else
    no_rebuild
fi

echo "Application available at localhost:8080"