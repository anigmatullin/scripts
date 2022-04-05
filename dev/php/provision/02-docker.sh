#!/usr/bin/env bash
export DEBIAN_FRONTEND=noninteractive

# Install docker-ce
curl -fsSL https://get.docker.com | bash -s

# Enable vagrant user to run docker commands
sudo usermod -aG docker $USER

# Install docker-compose
curl \
    -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" \
    -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
