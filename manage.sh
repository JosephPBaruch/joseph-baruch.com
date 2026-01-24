#!/bin/bash

# Maintenance script for josephbaruch.com website
# Provides common operations for managing the website

set -e

REPO_DIR="${REPO_DIR:-/opt/josephbaruch.com}"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}"
}

print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Determine docker compose command
if docker compose version &> /dev/null; then
    DOCKER_COMPOSE="docker compose"
else
    DOCKER_COMPOSE="docker-compose"
fi

show_help() {
    print_header "Website Maintenance Script"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  status      - Show container status"
    echo "  logs        - Show container logs (live)"
    echo "  logs-tail   - Show last 100 lines of logs"
    echo "  start       - Start the website"
    echo "  stop        - Stop the website"
    echo "  restart     - Restart the website"
    echo "  update      - Pull latest code and redeploy"
    echo "  rebuild     - Rebuild and restart containers"
    echo "  clean       - Remove old Docker images"
    echo "  health      - Check website health"
    echo "  help        - Show this help message"
    echo ""
}

check_directory() {
    if [ ! -d "$REPO_DIR" ]; then
        print_error "Repository directory not found: $REPO_DIR"
        exit 1
    fi
    cd "$REPO_DIR"
}

case "$1" in
    status)
        print_header "Container Status"
        docker ps --filter name=josephbaruch-website --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
        ;;
    
    logs)
        check_directory
        print_info "Showing live logs (Ctrl+C to exit)..."
        $DOCKER_COMPOSE logs -f
        ;;
    
    logs-tail)
        check_directory
        print_info "Showing last 100 lines of logs..."
        $DOCKER_COMPOSE logs --tail=100
        ;;
    
    start)
        check_directory
        print_info "Starting website..."
        $DOCKER_COMPOSE up -d
        print_info "Website started successfully"
        ;;
    
    stop)
        check_directory
        print_info "Stopping website..."
        $DOCKER_COMPOSE down
        print_info "Website stopped successfully"
        ;;
    
    restart)
        check_directory
        print_info "Restarting website..."
        $DOCKER_COMPOSE restart
        print_info "Website restarted successfully"
        ;;
    
    update)
        check_directory
        print_info "Running deployment script..."
        ./deploy-home.sh
        ;;
    
    rebuild)
        check_directory
        print_info "Rebuilding and restarting containers..."
        $DOCKER_COMPOSE down
        $DOCKER_COMPOSE up -d --build
        print_info "Rebuild completed successfully"
        ;;
    
    clean)
        print_info "Cleaning up old Docker images..."
        docker image prune -f
        print_info "Cleanup completed successfully"
        ;;
    
    health)
        print_header "Website Health Check"
        if docker ps | grep -q josephbaruch-website; then
            print_info "✅ Container is running"
            
            # Try to curl the website
            if command -v curl &> /dev/null; then
                if curl -f -s http://localhost:8084 > /dev/null; then
                    print_info "✅ Website is responding"
                else
                    print_error "❌ Website is not responding"
                fi
            else
                print_info "Install curl to test website response"
            fi
        else
            print_error "❌ Container is not running"
        fi
        ;;
    
    help|--help|-h|"")
        show_help
        ;;
    
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
