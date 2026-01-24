# Joseph Baruch Personal Website

This repository contains a containerized React + TypeScript application that can be deployed to AWS or your personal home server. The application is built with Vite and served using Nginx in a Docker container.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Locally](#running-locally)
- [Deployment Options](#deployment-options)
  - [Home Server Deployment](#home-server-deployment)
  - [AWS ECR and App Runner Deployment](#aws-ecr-and-app-runner-deployment)
- [Continuous Integration (CI)](#continuous-integration-ci)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a personal website built with React, TypeScript, and Material-UI, containerized with Docker for easy deployment. It supports multiple deployment options:
- **Home Server**: Deploy to your personal server with automated updates
- **AWS**: Deploy to AWS App Runner via ECR for cloud hosting

The CI/CD pipelines automate the build and deployment process for both options.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18.x or above)
- [Docker](https://www.docker.com/get-started) (for containerized deployment)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JosephPBaruch/joseph-baruch.com.git
   cd joseph-baruch.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Locally

### Option 1: Development Mode (without Docker)

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at `http://localhost:5173`.

### Option 2: Docker Container (Production-like)

```bash
# Build the Docker image
docker build -t josephbaruch.com .

# Run the container
docker run -p 8084:8084 josephbaruch.com
```

The application will be available at `http://localhost:8084`.

### Option 3: Docker Compose

```bash
# Build and run with docker-compose
docker compose up -d

# View logs
docker compose logs -f

# Stop
docker compose down
```

The application will be available at `http://localhost:8084`.

## Deployment Options

### Home Server Deployment

Deploy the website to your personal home server with automated updates.

#### 🚀 Quick Start

See **[QUICK_START.md](QUICK_START.md)** for a 5-minute deployment guide.

#### 📚 Full Documentation

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for comprehensive setup instructions including:
- Initial server setup and prerequisites
- Manual deployment process
- Automated deployment via GitHub Actions
- Security configuration
- Troubleshooting

#### Quick Deploy Command

```bash
cd /opt && \
  sudo mkdir -p josephbaruch.com && \
  sudo chown $USER:$USER josephbaruch.com && \
  cd josephbaruch.com && \
  git clone https://github.com/JosephPBaruch/joseph-baruch.com.git . && \
  chmod +x deploy-home.sh && \
  ./deploy-home.sh
```

Your website will be running at `http://localhost:8084` 🎉

## Continuous Integration (CI)

This project uses GitHub Actions for automated CI/CD with two workflows:

1. **AWS Deployment** (`.github/workflows/ci.yaml`):
   - Builds the Docker image
   - Pushes to AWS Elastic Container Registry (ECR)
   - Deploys to AWS App Runner

2. **Home Server Deployment** (`.github/workflows/deploy-home.yml`):
   - Connects to your home server via SSH
   - Pulls latest code
   - Rebuilds and restarts containers
   - Automatically triggered on push to `main` branch

## AWS ECR and App Runner Deployment

The application is deployed on AWS App Runner. To deploy it manually, follow these steps:

1. **Login to AWS ECR:**

   ```bash
   aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com
   ```

2. **Build and Tag Docker Image:**

   ```bash
   docker build -t my-typescript-app .
   docker tag my-typescript-app:latest <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/my-typescript-app:latest
   ```

3. **Push Image to ECR:**

   ```bash
   docker push <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/my-typescript-app:latest
   ```

4. **Deploy on AWS App Runner:**
   - Use the AWS Management Console to create a new App Runner service.
   - Select the ECR repository and image that was pushed in the previous step.
   - Configure the runtime settings and deploy the application.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
