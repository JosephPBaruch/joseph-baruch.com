# Containerized TypeScript Application

Change this: This repository contains a containerized TypeScript application that is built, tested, and deployed using CI pipelines. The container image is pushed to AWS Elastic Container Registry (ECR) and deployed on AWS App Runner.

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Locally](#running-locally)
- [Continuous Integration (CI)](#continuous-integration-ci)
- [AWS ECR and App Runner Deployment](#aws-ecr-and-app-runner-deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is designed to run a TypeScript application in a Docker container. The CI pipeline automates the build process, ensuring the container is consistently up-to-date with the latest application changes. The pipeline also pushes the image to AWS Elastic Container Registry (ECR) for deployment using AWS App Runner, allowing seamless and scalable deployment of the application.

## Getting Started

Follow these steps to set up the project locally and deploy it to AWS.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14.x or above)
- [Docker](https://www.docker.com/get-started)
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS IAM Access](https://aws.amazon.com/iam/) configured with the necessary permissions for ECR and App Runner.
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Running Locally

To run the application locally, you can build and run the Docker container:

1. Build the Docker image:
    ```bash
    docker build -t my-typescript-app .
    ```

2. Run the container:
    ```bash
    docker run -p 3000:3000 my-typescript-app
    ```

3. The application will be available at `http://localhost:3000`.

## Continuous Integration (CI)

This project uses a CI pipeline to automate the following tasks:
1. **Linting and Testing:** Runs `npm run lint` and `npm test` to ensure code quality and verify application behavior.
2. **Docker Image Build:** Builds the Docker image for the application.
3. **Pushing to AWS ECR:** Pushes the Docker image to AWS Elastic Container Registry (ECR).
4. **Deployment to AWS App Runner:** Triggers the deployment of the latest image on AWS App Runner.

### CI Configuration

CI is set up using a `.github/workflows/ci.yml` file (or an equivalent CI service configuration). It contains the following steps:
1. **Install Dependencies:** Installs the necessary Node.js dependencies.
2. **Run Lint and Tests:** Executes linting and unit tests.
3. **Login to AWS ECR:** Authenticates using AWS credentials to push the image.
4. **Build and Push Docker Image:** Builds the Docker image and pushes it to AWS ECR.
5. **Deploy to App Runner:** Initiates deployment of the newly pushed image to AWS App Runner.

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
