#!/bin/bash
BASEDIR=$(dirname "$0")
cd  "$BASEDIR"
node index 
open -a /Applications/Firefox.app https://stackoverflow.com
