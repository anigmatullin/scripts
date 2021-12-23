mkdir -p ~/dim/controller
mkdir -p ~/dim/backups

wget https://frcpnt.com/fp-dim-latest

mv fp-dim-latest fp-dim-latest.tgz

tar -xvf fp-dim-latest.tgz -C ~/dim/controller/

cd ~/dim/controller
