#!/bin/bash
BASEDIR=$(dirname "$0")
cd  "$BASEDIR"
echo "What is your local IP:"
read IP
node index $IP