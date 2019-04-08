#!/bin/bash

/usr/bin/docker run -it --rm --name letsencrypt \
  -v "/etc/letsencrypt:/etc/letsencrypt" \
  quay.io/letsencrypt/letsencrypt:latest \
  renew

/usr/local/bin/docker-compose -f /root/.cube/docker-compose.yml exec logs bash -c "echo 'renew_certificate:1|c' > /dev/udp/127.0.0.1/8125"
