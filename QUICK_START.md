# Quick Start: Home Server Deployment

This is a quick reference guide for deploying the josephbaruch.com website to your home server.

## 🚀 Quick Deploy (5 Minutes)

### Prerequisites Checklist
- [ ] Linux server (Ubuntu/Debian recommended)
- [ ] Docker installed
- [ ] Git installed
- [ ] Port 8084 available

### One-Command Deployment

```bash
# Clone and deploy in one command
cd /opt && \
  sudo mkdir -p josephbaruch.com && \
  sudo chown $USER:$USER josephbaruch.com && \
  cd josephbaruch.com && \
  git clone https://github.com/JosephPBaruch/joseph-baruch.com.git . && \
  chmod +x deploy-home.sh && \
  ./deploy-home.sh
```

Your website will be running at `http://localhost:8084` 🎉

## 📋 Manual Step-by-Step

If you prefer to run commands individually:

### 1. Prepare Directory
```bash
sudo mkdir -p /opt/josephbaruch.com
sudo chown $USER:$USER /opt/josephbaruch.com
cd /opt/josephbaruch.com
```

### 2. Clone Repository
```bash
git clone https://github.com/JosephPBaruch/joseph-baruch.com.git .
```

### 3. Deploy
```bash
chmod +x deploy-home.sh
./deploy-home.sh
```

## 🔄 Updating Your Website

To deploy the latest changes:

```bash
cd /opt/josephbaruch.com
./deploy-home.sh
```

The script automatically:
- ✅ Pulls latest code
- ✅ Builds Docker image
- ✅ Restarts containers
- ✅ Cleans up old images

## 🤖 Automated Deployment

Want automatic deployments when you push to GitHub?

See the **[Full Deployment Guide](DEPLOYMENT.md#method-2-automated-deployment-via-github-actions)** for:
- Setting up SSH keys
- Configuring GitHub Secrets
- Enabling automatic deployments

## 🛠️ Common Commands

```bash
# View logs
cd /opt/josephbaruch.com
docker compose logs -f

# Stop website
docker compose down

# Restart website
docker compose restart

# Check status
docker ps | grep josephbaruch
```

## ❓ Troubleshooting

**Container won't start?**
```bash
docker compose logs
```

**Port already in use?**
Edit `docker-compose.yml` and change the port:
```yaml
ports:
  - "8085:8084"  # Change first number to your preferred port
```

**Need more help?**
See the complete [DEPLOYMENT.md](DEPLOYMENT.md) guide.

## 🔒 Security Tip

Remember to configure your firewall:
```bash
sudo ufw allow 8084/tcp
sudo ufw enable
```

---

**Full Documentation:** [DEPLOYMENT.md](DEPLOYMENT.md)
