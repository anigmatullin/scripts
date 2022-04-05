#!/usr/bin/env bash
export DEBIAN_FRONTEND=noninteractive

# Force Locale
echo "LC_ALL=en_US.UTF-8" >> /etc/default/locale
locale-gen en_US.UTF-8

apt-get install -y heirloom-mailx  p7zip-full  software-properties-common curl gnupg debian-keyring debian-archive-keyring apt-transport-https \
ca-certificates

# Install Some Basic Packages
apt-get install -y build-essential dos2unix gcc git git-lfs libmcrypt4 libpcre3-dev libpng-dev chrony unzip make pv \
python3-pip re2c supervisor unattended-upgrades whois vim cifs-utils bash-completion zsh graphviz avahi-daemon tshark

# Set My Timezone
ln -sf /usr/share/zoneinfo/UTC /etc/localtime
