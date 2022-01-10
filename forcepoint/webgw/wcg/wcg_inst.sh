

wget http://cdn.websense.com/downloads/files/v8.5.4/ContentGateway854Setup_Lnx.tar.gz

sudo mkdir /var/wcg

sudo tar -xvf ./ContentGateway854Setup_Lnx.tar.gz -C /var/wcg

cd /var/wcg

sudo yum install wcg_rh7_deps-1-0.noarch.rpm

sudo systemctl disable NetworkManager
sudo systemctl stop NetworkManager

sudo systemctl disable firewalld
sudo systemctl stop firewalld

sudo ./wcg_install.sh

sudo systemctl disable iptables
sudo systemctl stop iptables

iptables -L

