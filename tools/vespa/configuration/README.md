# VESPA APPLICATION FOR ANN SEARCH ENGINE

# 1- Deploy Vespa  application package in K8s
https://blog.serialexperiments.co.uk/posts/kubernetes-port-forward-already-in-use/
## 1.1 Start the PV:
<pre data-test="exec">
$ minikube start --driver docker --memory 4096
$ cd vespa_app/config_cluste
$ kubectl apply -f pv_volume.yml && kubectl apply -f pv_claim.yml 
</pre>

## 1.2 Start the service:
<pre data-test="exec">
$ minikube ssh docker pull vespaengine/vespa
$ kubectl apply -f service.yml -f content.yml
$ kubectl get pods --watch
$ kubectl port-forward vespa-0 19071 8080 &
</pre>

## 1.3 Wait for configserver start - wait for 200 OK:
<pre data-test="exec">
$ curl -s --head http://localhost:19071/ApplicationStatus
</pre>

## 1.4 Zip the application package:
<pre data-test="exec">
$ cd .. && cd application_package/ && zip -r application.zip . 
</pre>

## 1.5 Deploy and activate the application package:
<pre data-test="exec">
$ curl --header Content-Type:application/zip --data-binary @application.zip \
  localhost:19071/application/v2/tenant/default/prepareandactivate
</pre>

## 1.6 Ensure the application is active - wait for 200 OK:
This normally takes a minute or so:

<pre data-test="exec">
$ curl -s --head http://localhost:8080/ApplicationStatus
</pre>

Refers to [vespa-quick-start-kubernetes](https://docs.vespa.ai/en/vespa-quick-start-kubernetes.html)




# 2- Metrics
<pre data-test="exec">
$ curl http://localhost:8080/metrics/v2/values 
</pre>

Others
SSH container 
kubectl exec --stdin --tty vespa-0 -- /bin/bash

https://github.com/vespa-engine/sample-apps/tree/master/examples/operations/basic-search-on-gke/scripts


