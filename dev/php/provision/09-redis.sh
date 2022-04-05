# Install Some PPAs

apt-add-repository ppa:chris-lea/redis-server -y

# Install Redis
apt-get install -y redis-server
sudo systemctl enable redis-server
sudo systemctl start redis-server
