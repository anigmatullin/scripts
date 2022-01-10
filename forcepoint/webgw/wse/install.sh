

rm -fr /var/wse
rm -f Web85*

mkdir /var/wse
cd /var/wse

yum -y install wget unzip

wget http://cdn.websense.com/downloads/files/v8.5.4/Web854Setup_Lnx.tar.gz

sudo tar -xvf Web854Setup_Lnx.tar.gz -C /var/wse


yum -y install epel-release
yum -y install haveged
yum -y install xorg-x11-fonts-Type1
yum -y install dejavu-serif-fonts

systemctl enable haveged.service
systemctl start haveged.service


cd /var/wse
sudo ./install.sh


