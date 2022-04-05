# Install Redis, Memcached, & Beanstalk
sudo apt install -y beanstalkd

# Configure Beanstalkd
sudo sed -i "s/#START=yes/START=yes/" /etc/default/beanstalkd
