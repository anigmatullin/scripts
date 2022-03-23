
sudo apt install containerd

sudo apt install docker.io


sudo usermod -aG docker $USER

newgrp docker

id -nG

sudo systemctl enable docker

sudo systemctl start docker

docker ps
