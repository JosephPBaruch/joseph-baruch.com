# Home Server Deployment - Files Overview

This directory contains all the necessary files for deploying and managing the josephbaruch.com website on your home server.

## 📁 Deployment Files

### Core Deployment Files

#### `docker-compose.yml`
Docker Compose configuration that defines the website service. This simplifies container management with a single command.

**Key features:**
- Defines the web service using the Dockerfile
- Maps port 8084 to the host
- Sets up automatic restart on failure
- Creates an isolated network for the container

**Usage:**
```bash
docker compose up -d      # Start in detached mode
docker compose down       # Stop and remove containers
docker compose logs -f    # View logs
```

#### `Dockerfile`
Multi-stage Docker build configuration that:
1. **Builder stage:** Installs dependencies and builds the React app
2. **Production stage:** Serves the built app with Nginx

**Stages:**
- Uses Node.js 18 Alpine for the build
- Uses Nginx Alpine for serving
- Exposes port 8084
- Optimized for small image size

#### `nginx.conf`
Nginx server configuration for serving the static website.

**Configuration:**
- Listens on port 8084
- Serves files from `/usr/share/nginx/html`
- Handles React Router with `try_files`
- Sets up aliases for `/images/` and `/resume/` paths

### Deployment Scripts

#### `deploy-home.sh` ⭐
**Main deployment script** - Automates the entire deployment process.

**What it does:**
1. ✅ Validates Docker and Docker Compose installation
2. ✅ Creates repository directory if needed
3. ✅ Clones or updates the repository
4. ✅ Pulls latest code from GitHub
5. ✅ Stops existing containers
6. ✅ Builds and starts new containers
7. ✅ Validates deployment success
8. ✅ Cleans up old Docker images

**Usage:**
```bash
./deploy-home.sh
```

**Environment variables:**
- `REPO_DIR` - Repository directory (default: `/opt/josephbaruch.com`)
- `REPO_URL` - Git repository URL
- `BRANCH` - Git branch to deploy (default: `main`)

#### `manage.sh` 🛠️
**Management script** - Provides convenient commands for common operations.

**Available commands:**
- `status` - Show container status
- `logs` - Show live container logs
- `logs-tail` - Show last 100 lines of logs
- `start` - Start the website
- `stop` - Stop the website
- `restart` - Restart the website
- `update` - Pull latest code and redeploy
- `rebuild` - Rebuild and restart containers
- `clean` - Remove old Docker images
- `health` - Check website health
- `help` - Show help message

**Usage:**
```bash
./manage.sh status
./manage.sh logs
./manage.sh update
```

### Automation Files

#### `.github/workflows/deploy-home.yml`
GitHub Actions workflow for automated deployment to your home server.

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**What it does:**
1. Connects to your home server via SSH
2. Clones/updates the repository
3. Runs the deployment script
4. Reports deployment status

**Required GitHub Secrets:**
- `HOME_SERVER_HOST` - Your server IP or hostname
- `HOME_SERVER_USER` - SSH username
- `HOME_SERVER_SSH_KEY` - Private SSH key
- `HOME_SERVER_PORT` - SSH port (optional, defaults to 22)

### System Service Files

#### `josephbaruch-website.service`
systemd service unit file for auto-starting the website on server boot.

**Features:**
- Starts after Docker is ready
- Automatically starts on boot
- Uses docker compose to manage containers

**Installation:**
```bash
sudo cp josephbaruch-website.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable josephbaruch-website.service
sudo systemctl start josephbaruch-website.service
```

**Note:** Update the `User=` line if you're not using a `deploy` user.

### Configuration Files

#### `.env.example`
Example environment configuration file. Copy to `.env.local` and customize for your environment.

**Variables:**
- `REPO_DIR` - Where to store the repository
- `REPO_URL` - Git repository URL
- `BRANCH` - Git branch to deploy
- `CONTAINER_NAME` - Docker container name
- `IMAGE_NAME` - Docker image name
- `PORT` - Application port

## 📖 Documentation Files

#### `QUICK_START.md`
5-minute quick start guide with one-command deployment and common operations.

**Best for:**
- First-time setup
- Quick reference
- Common commands

#### `DEPLOYMENT.md`
Comprehensive deployment guide with detailed setup instructions.

**Covers:**
- Prerequisites and server setup
- Manual deployment
- Automated deployment via GitHub Actions
- Reverse proxy configuration
- HTTPS setup with Let's Encrypt
- systemd service configuration
- Troubleshooting
- Security best practices

## 🚀 Quick Start

1. **One-command deployment:**
   ```bash
   cd /opt && \
     sudo mkdir -p josephbaruch.com && \
     sudo chown $USER:$USER josephbaruch.com && \
     cd josephbaruch.com && \
     git clone https://github.com/JosephPBaruch/joseph-baruch.com.git . && \
     chmod +x deploy-home.sh && \
     ./deploy-home.sh
   ```

2. **Update deployment:**
   ```bash
   cd /opt/josephbaruch.com
   ./deploy-home.sh
   ```

3. **Manage website:**
   ```bash
   ./manage.sh status
   ./manage.sh logs
   ```

## 📊 File Dependency Tree

```
Home Server Deployment
│
├── docker-compose.yml
│   └── Uses: Dockerfile, nginx.conf
│
├── Dockerfile
│   └── Uses: package.json, src/, nginx.conf
│
├── deploy-home.sh (Main deployment)
│   └── Uses: docker-compose.yml, git
│
├── manage.sh (Daily operations)
│   └── Uses: docker-compose.yml
│
├── .github/workflows/deploy-home.yml (Automation)
│   └── Calls: deploy-home.sh
│
└── josephbaruch-website.service (Auto-start)
    └── Uses: docker-compose.yml
```

## 🔒 Security Notes

1. **Never commit secrets:**
   - SSH keys
   - `.env.local` files
   - Personal server information

2. **File permissions:**
   - Scripts should be executable (755)
   - Service files should be readable (644)

3. **GitHub Secrets:**
   - Store sensitive information in GitHub Secrets
   - Never hardcode credentials in workflows

## 🆘 Troubleshooting

### Deployment fails
```bash
# Check logs
./manage.sh logs

# Validate configuration
docker compose config
```

### Container won't start
```bash
# Check Docker status
sudo systemctl status docker

# Check container logs
docker compose logs
```

### Can't connect to website
```bash
# Check firewall
sudo ufw status
sudo ufw allow 8084/tcp

# Check if port is listening
sudo netstat -tlnp | grep 8084
```

## 📚 Additional Resources

- **Full Documentation:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Quick Reference:** [QUICK_START.md](QUICK_START.md)
- **Main README:** [README.md](README.md)

---

**Need help?** See the troubleshooting sections in DEPLOYMENT.md or check the container logs with `./manage.sh logs`.
