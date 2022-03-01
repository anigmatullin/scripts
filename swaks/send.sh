#!/bin/bash

FILES=$1/*.txt
SRV=192.168.35.131

for f in $FILES
do
  echo "Processing $f file..."
  ./swaks --server $SRV  -f sender@example.com  -t user1@demo.local,user2@demo.local  -d $f
  # take action on each file. $f store current file name
done

