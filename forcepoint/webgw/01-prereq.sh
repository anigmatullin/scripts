

sudo yum install epel-release
sudo yum install haveged unzip wget

sudo yum -y install xorg-x11-fonts-Type1
sudo yum -y install dejavu-serif-fonts


sudo yum install apr apr-util compat-readline5 db4 ftp krb5-workstation libssh2 ncurses-devel perl perl-libwww-perl readline-devel redhat-lsb-core samba-winbind-clients tcl tcp_wrappers-libs


sudo systemctl enable haveged
sudo systemctl start haveged

systemctl list-unit-files | grep haveged  | grep enabled

sudo ./Setup.bin -i console

