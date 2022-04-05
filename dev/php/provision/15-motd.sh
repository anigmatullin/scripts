# Update / Override motd
echo "export ENABLED=1"| tee -a /etc/default/motd-news

sudo sed -i "s/motd.ubuntu.com/anigmatullin.github.io/g" /etc/default/motd-news
sudo sed -i "s/motd.ubuntu.com/anigmatullin.github.io/g" /etc/update-motd.d/50-motd-news

rm -rf /etc/update-motd.d/10-help-text
rm -rf /etc/update-motd.d/50-landscape-sysinfo
rm -rf /etc/update-motd.d/99-bento

sudo systemctl restart motd-news
bash /etc/update-motd.d/50-motd-news --force
