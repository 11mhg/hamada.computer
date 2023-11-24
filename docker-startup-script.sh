#!/bin/bash


cd /backend/ && npm run start &> /dev/null &
httpd-foreground 
