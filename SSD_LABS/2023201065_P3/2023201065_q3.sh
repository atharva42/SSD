#!/bin/bash
path=$1
for d in $(ls $path); do
cat $path/$d | grep "#include"
echo ""
done
