
ssh-copy-id user@host

ssh user@host

sudo yum update

cd /etc/sysconfig/network-scripts/

sudo cp ifcfg-ens192 ifcfg-eth0

#update DEVICE, NAME to match new name
sudo vim ifcfg-eth0

sudo rm -f /etc/udev/rules.d/70-persistent-net.rules

echo 'GRUB_CMDLINE_LINUX=" net.ifnames=0 biosdevname=0"' | sudo tee -a /etc/default/grub

sudo grub2-mkconfig -o /boot/grub2/grub.cfg

sudo reboot

sudo yum install net-tools vim tcpdump unzip wget

sudo systemctl disable NetworkManager
sudo systemctl stop NetworkManager


