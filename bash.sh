#!/bin/bash

source ip.cfg 

ip=($IP1 $IP2) 


x=1
while [ $x -le 5000 ]
do
    result=`ping -c 1 192.168.0.13`
	echo $result >> "servidor1.txt"

    result=`ping -c 1 192.168.0.22`
	echo $result >> "servidor2.txt"

    sleep 1
done