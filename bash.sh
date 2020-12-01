#!/bin/bash
node api.js &
x=1
echo 
while [ $x -le 5000 ]
do
    result=`ping -c 1 192.168.0.13 | while read pong; do echo "$(date): $pong"; done`
	echo $result >> "servidor1.txt"

    result=`ping -c 1 192.168.0.22 | while read pong; do echo "$(date): $pong"; done`
	echo $result >> "servidor2.txt"

    sleep 1
done