#run tool to generate configs
sudo bash init.sh

#check that certficate files are generated
#use your server's ip address as the folder name

ls ./certs/conf/live/192.168.35.129/

# Forcepoint Docker Hub has expired certificate - using a workaround
sudo timedatectl set-ntp no

sudo date --set="2021-12-01 00:00"

#check date - it should be 1st of December
date

docker login -u fp-dim-user -p BVQL7ABrFrCM8hk docker.frcpnt.com

#if docker login was successfull - we can proceed
cd ~/dim/controller

docker-compose up 

#check the output and
#press Ctrl+C

sudo timedatectl set-ntp yes

#run the containers:

docker-compose up -d

#login to the product
# url: https://server-ip/
# user: admin.user@forcepoint.com
# pass: password1

