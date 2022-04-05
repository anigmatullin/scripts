#!/bin/bash

#enable swap

FILE=/var/swap.1

if [ -f "$FILE" ]; then
    echo "$FILE exists."
else
    # Enable Swap Memory
    /bin/dd if=/dev/zero of=$FILE bs=1M count=1024
    /sbin/mkswap $FILE
    /sbin/swapon $FILE
fi
