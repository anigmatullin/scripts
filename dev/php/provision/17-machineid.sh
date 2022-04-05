# Blank netplan machine-id (DUID) so machines get unique ID generated on boot.
sudo truncate -s 0 /etc/machine-id
