
sudo dnf groupinstall "Server with GUI"

sudo dnf install epel-release

sudo dnf install xrdp

sudo systemctl enable xrdp --now

sudo systemctl status xrdp

sudo firewall-cmd --new-zone=xrdp --permanent
sudo firewall-cmd --zone=xrdp --add-port=3389/tcp --permanent
sudo firewall-cmd --zone=xrdp --add-source=192.168.1.0/24 --permanent
sudo firewall-cmd --reload

echo "Make sure you don't have local sessions before testing RDP connection!"
echo "Otherwise, the connection would drop immediatelly after login"
echo "sudo tail -f /var/log/xrdp-sesman.log"
echo "would show the following:"
echo "Window manager (pid yyyyy, display xx) exited quickly (1 secs). This could indicate a window manager config problem"

echo "settings can be customized here: /etc/xrdp/xrdp.ini"

