#!/bin/bash

# Delete existing deployment, service, and ingress if they exist
kubectl delete deployment josephbaruch-deployment --ignore-not-found
kubectl delete service josephbaruch-service --ignore-not-found
kubectl delete ingress josephbaruch-ingress --ignore-not-found

# Apply the new deployment, service, and ingress configurations
kubectl apply -f /Users/joseph.baruch/REPO/personal/joseph-baruch.com/ServerHosting/deployment.yaml
kubectl apply -f /Users/joseph.baruch/REPO/personal/joseph-baruch.com/ServerHosting/service.yaml
kubectl apply -f /Users/joseph.baruch/REPO/personal/joseph-baruch.com/ServerHosting/ingress.yaml
