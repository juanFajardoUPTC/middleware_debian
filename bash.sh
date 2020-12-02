#!/bin/bash
cat /dev/null > servidor1.txt
cat /dev/null > servidor2.txt
npm init
npm install express --save
node api.js &
x=1
echo 
while [ $x -le 5000 ]
do
    result=`ping -c 1 192.168.0.14 | while read pong; do echo "$(date): $pong"; done`
	echo $result >> "servidor1.txt"

    result=`ping -c 1 192.168.0.15 | while read pong; do echo "$(date): $pong"; done`
	echo $result >> "servidor2.txt"

    sleep 1
done