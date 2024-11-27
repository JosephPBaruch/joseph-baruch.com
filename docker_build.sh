#!/bin/bash

set -e

docker kill $(docker ps -q) || true

docker system prune -f

docker build -t josephbaruch .

docker run -d -p 8080:8080 josephbaruch