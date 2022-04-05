export DEBIAN_FRONTEND=noninteractive

echo deb http://security.ubuntu.com/ubuntu trusty-security main universe | sudo tee -a /etc/apt/sources.list
sudo add-apt-repository ppa:ondrej/php -y

# Update Package List
sudo apt-get update

# Update System Packages
sudo apt-get upgrade -y
