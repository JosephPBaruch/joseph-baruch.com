# Home Server Deployment Guide

This guide will help you set up automated deployment of the josephbaruch.com website on your personal home server.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Server Setup](#initial-server-setup)
- [Deployment Methods](#deployment-methods)
  - [Method 1: Manual Deployment](#method-1-manual-deployment)
  - [Method 2: Automated Deployment via GitHub Actions](#method-2-automated-deployment-via-github-actions)
- [Maintenance and Updates](#maintenance-and-updates)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before setting up deployment on your home server, ensure you have:

1. **Linux-based home server** (Ubuntu 20.04+ recommended)
2. **Docker and Docker Compose** installed
3. **Git** installed
4. **Network access** - Port 8084 should be accessible
5. **SSH access** to your home server (for automated deployments)

## Initial Server Setup

### 1. Install Docker

If Docker is not already installed on your home server:

```bash
# Update package index
sudo apt-get update

# Install prerequisites
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker's official GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Set up the Docker repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add your user to the docker group (optional, to run docker without sudo)
sudo usermod -aG docker $USER

# Log out and back in for group changes to take effect
```

### 2. Install Docker Compose (if not included with Docker)

```bash
# If docker compose plugin is not installed, install standalone docker-compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 3. Verify Installation

```bash
# Verify Docker is running
docker --version
docker ps

# Verify Docker Compose
docker compose version
# OR
docker-compose --version
```

## Deployment Methods

### Method 1: Manual Deployment

This method allows you to manually deploy the website whenever you want.

#### Step 1: Clone the Repository

```bash
# Create directory for the application
sudo mkdir -p /opt/josephbaruch.com
sudo chown $USER:$USER /opt/josephbaruch.com

# Clone the repository
cd /opt/josephbaruch.com
git clone https://github.com/JosephPBaruch/joseph-baruch.com.git .
```

#### Step 2: Deploy Using the Script

```bash
# Navigate to the project directory
cd /opt/josephbaruch.com

# Run the deployment script
./deploy-home.sh
```

The script will:
- Pull the latest code from GitHub
- Build the Docker image
- Stop any existing containers
- Start the new container
- Clean up old images

#### Step 3: Access Your Website

Once deployed, your website will be available at:
- Local: `http://localhost:8084`
- Network: `http://YOUR_SERVER_IP:8084`

### Method 2: Automated Deployment via GitHub Actions

This method allows automatic deployment to your home server whenever you push changes to GitHub.

#### Step 1: Set Up SSH Access

On your home server, create a dedicated deployment user (recommended for security):

```bash
# Create deployment user (optional but recommended)
sudo adduser deploy
sudo usermod -aG docker deploy

# Switch to deploy user
sudo su - deploy

# Generate SSH key for GitHub Actions
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy -N ""

# Add the public key to authorized_keys
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Display the private key (you'll need this for GitHub Secrets)
cat ~/.ssh/github_deploy
```

**Important:** Copy the private key output. You'll need it in the next step.

#### Step 2: Configure GitHub Secrets

1. Go to your GitHub repository: `https://github.com/JosephPBaruch/joseph-baruch.com`
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

| Secret Name | Description | Example Value |
|-------------|-------------|---------------|
| `HOME_SERVER_HOST` | Your home server IP or hostname | `192.168.1.100` or `home.example.com` |
| `HOME_SERVER_PORT` | SSH port (usually 22) | `22` |
| `HOME_SERVER_USER` | SSH username | `deploy` |
| `HOME_SERVER_SSH_KEY` | Private SSH key from Step 1 | `-----BEGIN OPENSSH PRIVATE KEY-----...` |

#### Step 3: Enable Automatic Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-home.yml` that will:
- Trigger on every push to the `main` branch
- Connect to your home server via SSH
- Run the deployment script automatically

No additional configuration is needed once the secrets are set up!

#### Step 4: Test Automatic Deployment

1. Make a small change to your repository
2. Commit and push to the `main` branch
3. Go to the **Actions** tab in GitHub to watch the deployment progress
4. Once complete, check your website at `http://YOUR_SERVER_IP:8084`

## Maintenance and Updates

### View Container Logs

```bash
cd /opt/josephbaruch.com
docker compose logs -f
```

### Stop the Website

```bash
cd /opt/josephbaruch.com
docker compose down
```

### Restart the Website

```bash
cd /opt/josephbaruch.com
docker compose restart
```

### Manual Update

```bash
cd /opt/josephbaruch.com
./deploy-home.sh
```

### Check Container Status

```bash
docker ps --filter name=josephbaruch-website
```

## Troubleshooting

### Container Won't Start

Check the logs for errors:
```bash
cd /opt/josephbaruch.com
docker compose logs
```

### Port Already in Use

If port 8084 is already in use, you can change it in `docker-compose.yml`:

```yaml
ports:
  - "8085:8084"  # Change 8085 to your preferred port
```

Then redeploy:
```bash
./deploy-home.sh
```

### Can't Connect to Website

1. Check if the container is running:
   ```bash
   docker ps | grep josephbaruch-website
   ```

2. Check firewall settings:
   ```bash
   sudo ufw status
   sudo ufw allow 8084/tcp
   ```

3. Verify the service is listening:
   ```bash
   sudo netstat -tlnp | grep 8084
   ```

### Automated Deployment Not Working

1. Check GitHub Actions logs in the **Actions** tab
2. Verify SSH connectivity from your local machine:
   ```bash
   ssh -i /path/to/private/key deploy@YOUR_SERVER_IP
   ```
3. Ensure the deployment script is executable:
   ```bash
   chmod +x /opt/josephbaruch.com/deploy-home.sh
   ```

### Disk Space Issues

Clean up old Docker images:
```bash
docker system prune -a
```

## Advanced Configuration

### Running Behind a Reverse Proxy (Nginx)

If you want to run the website on port 80/443 with a domain name:

1. Install Nginx on your home server:
   ```bash
   sudo apt-get install nginx
   ```

2. Create an Nginx configuration:
   ```bash
   sudo nano /etc/nginx/sites-available/josephbaruch.com
   ```

3. Add the following configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;

       location / {
           proxy_pass http://localhost:8084;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. Enable the site and restart Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/josephbaruch.com /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### Setting Up HTTPS with Let's Encrypt

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtain and install certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Certificate will auto-renew
```

## Security Best Practices

1. **Keep your server updated:**
   ```bash
   sudo apt-get update && sudo apt-get upgrade
   ```

2. **Use SSH keys instead of passwords**
3. **Configure firewall (UFW):**
   ```bash
   sudo ufw enable
   sudo ufw allow ssh
   sudo ufw allow 8084/tcp
   ```

4. **Regularly update Docker images:**
   ```bash
   cd /opt/josephbaruch.com
   ./deploy-home.sh
   ```

5. **Monitor logs for suspicious activity:**
   ```bash
   docker compose logs -f
   ```

## Support

If you encounter issues not covered in this guide:
1. Check the container logs
2. Review GitHub Actions logs (for automated deployments)
3. Verify all prerequisites are met
4. Ensure network connectivity and firewall rules

---

**Note:** Remember to keep your SSH keys secure and never commit them to version control!
