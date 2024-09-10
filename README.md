# docker-k8s-hello-world

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
2. You should see the hello world api response

## Notes
- The hello-world-k8s-api is deployed as a pod in the default namespace
- The hello-world-k8s-ui is deployed as a pod in the default namespace
- The hello-world-k8s-api and hello-world-k8s-ui are deployed in the same namespace
