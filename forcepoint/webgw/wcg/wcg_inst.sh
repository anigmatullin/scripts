

wget http://cdn.websense.com/downloads/files/v8.5.3/ContentGateway853Setup_Lnx.tar.gz

mkdir /var/wcg

tar -xvf /root/ContentGateway853Setup_Lnx.tar.gz -C /var/wcg


cd /var/wcg

yum install wcg_rh7_deps-1-0.noarch.rpm

systemctl disable NetworkManager
systemctl stop NetworkManager

systemctl disable firewalld
systemctl stop firewalld


./wcg_install.sh

