#!/bin/bash
x=1
while [ $x -le 5000 ]
do
    result=`ping -c 1 192.168.0.13 | xargs -n1 -i bash -c 'echo `date +%F\ %T`" {}"'`
	echo $result >> "servidor1.txt"

    result=`ping -c 1 192.168.0.22 | xargs -n1 -i bash -c 'echo `date +%F\ %T`" {}"'`
	echo $result >> "servidor2.txt"

    sleep 1
done