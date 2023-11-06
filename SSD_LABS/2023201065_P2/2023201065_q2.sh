#!/bin/bash
path=$1
for d in $(ls $path); do
if [[ $(stat $path/$d | grep -oh "0721") == "0721" ]]
then
echo $d
fi
if [[ $(stat $path/$d | grep -oh "0723") == "0723" ]]
then
echo $d
fi
if [[ $(stat $path/$d | grep -oh "0727") == "0727" ]]
then
echo $d
fi
done
