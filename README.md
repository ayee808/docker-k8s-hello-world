# docker-k8s-hello-world

This is a simple node.js backend api and react frontend hello world application.  It is designed to be used as a starting point for learning how to containerize and deploy applications on kubernetes.  In this project, are dockerfiles and the kubernetes deployment and service yaml files needed to run the application on Docker Desktop Kubernetes.

### Prerequisites
- Docker Desktop with Kubernetes enabled
- Node.js and npm installed

## Running the application on kubernetes in docker desktop
1. Start Docker Desktop and make sure kubernetes is enabled
2. Start the hello-world-k8s-api
```
cd hello-world-k8s-api
kubectl apply -f deployment-api.yaml
```
3. Start the hello-world-k8s-ui
```
cd hello-world-k8s-ui
kubectl apply -f deployment-ui.yaml
```
4. Start the hello-world-k8s-ui-service
```
kubectl apply -f service-ui.yaml
```
5. Start the hello-world-k8s-api-service
```
kubectl apply -f service-api.yaml
```

## Accessing the application
1. Open your browser and navigate to http://localhost
2. You should see the react logo and the hello world api response

## Notes
- The hello-world-k8s-api is deployed as a pod in the helloworld namespace
- The hello-world-k8s-ui is deployed as a pod in the helloworld namespace

