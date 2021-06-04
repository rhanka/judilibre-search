#!/bin/bash
#es prerequisites
kubectl apply -f https://download.elastic.co/downloads/eck/1.5.0/all-in-one.yaml
for service in elasticsearch api ingress load-balancer;do
	cat ${service}.yaml | envsubst | kubectl apply -f -;
done

#kubectl port-forward service/judilibre-elasticsearch-es-http 9200
#curl -XPUT localhost:9200/${ELASTIC_INDEX}