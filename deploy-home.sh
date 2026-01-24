#!/bin/bash

# Home Server Deployment Script for josephbaruch.com
# This script handles pulling the latest code and deploying the website

set -e  # Exit on error

echo "=========================================="
echo "Joseph Baruch Website - Home Deployment"
echo "=========================================="

# Configuration
REPO_DIR="${REPO_DIR:-/opt/josephbaruch.com}"
REPO_URL="${REPO_URL:-https://github.com/JosephPBaruch/joseph-baruch.com.git}"
BRANCH="${BRANCH:-main}"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored messages
print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Determine docker compose command
if docker compose version &> /dev/null; then
    DOCKER_COMPOSE="docker compose"
else
    DOCKER_COMPOSE="docker-compose"
fi

print_info "Using Docker Compose command: $DOCKER_COMPOSE"

# Create repository directory if it doesn't exist
if [ ! -d "$REPO_DIR" ]; then
    print_info "Creating repository directory at $REPO_DIR"
    sudo mkdir -p "$REPO_DIR"
    sudo chown $USER:$USER "$REPO_DIR"
fi

# Navigate to repository directory
cd "$REPO_DIR"

# Clone or update repository
if [ ! -d ".git" ]; then
    print_info "Cloning repository from $REPO_URL"
    git clone "$REPO_URL" .
else
    print_info "Repository already exists. Fetching latest changes..."
    git fetch origin
fi

# Checkout and pull latest code
print_info "Checking out branch: $BRANCH"
git checkout "$BRANCH"
print_info "Pulling latest changes..."
git pull origin "$BRANCH"

# Stop existing containers
print_info "Stopping existing containers..."
$DOCKER_COMPOSE down || print_warning "No existing containers to stop"

# Build and start new containers
print_info "Building and starting containers..."
$DOCKER_COMPOSE up -d --build

# Wait for container to be healthy
print_info "Waiting for container to start..."
sleep 5

# Check if container is running
if docker ps | grep -q josephbaruch-website; then
    print_info "Container is running successfully!"
    
    # Display container status
    echo ""
    print_info "Container Status:"
    docker ps --filter name=josephbaruch-website --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    
    # Clean up old images
    print_info "Cleaning up old Docker images..."
    docker image prune -f
    
    echo ""
    print_info "=========================================="
    print_info "Deployment completed successfully!"
    print_info "Website is available at: http://localhost:8084"
    print_info "=========================================="
else
    print_error "Container failed to start. Check logs with:"
    echo "  $DOCKER_COMPOSE logs"
    exit 1
fi
