#!/bin/bash

rows=$1
data1=$2
data2=$3
data3=$4
inc=1
in_inc=1
iter=($2 $3 $4)
for d in ${iter[@]}; do
res=$(($d%2))
echo res is $res
if [[ res -eq 1 ]]; then
spaces=$(($d-1))
for i in {0..$d}; do
	for j in {0..spaces}; do
	echo " "
	done
	for j in {0..i}; do
	echo -n "* " 
	done
echo ""
spaces=$(($space-1))
done
fi 
done

