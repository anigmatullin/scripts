
sudo apt remove -y postgresql-13 postgresql-server-dev-12 postgresql-13-postgis-3 postgresql-13-postgis-3-scripts

# PostgreSQL
tee /etc/apt/sources.list.d/pgdg.list <<END
deb http://apt.postgresql.org/pub/repos/apt/ focal-pgdg main
END

wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -


  # Install Postgres 14
sudo apt install -y postgresql-14 postgresql-server-dev-14 postgresql-14-postgis-3 postgresql-14-postgis-3-scripts

  # Configure Postgres Users
sudo -u postgres psql -c "CREATE ROLE $USER LOGIN PASSWORD 'secret' SUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;"

  # Configure Postgres Remote Access
sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /etc/postgresql/14/main/postgresql.conf
echo "host    all             all             10.0.2.2/32               md5" | sudo tee -a /etc/postgresql/14/main/pg_hba.conf

sudo systemctl restart postgresql

if psql -lqt | cut -d \| -f 1 | grep -qw $USER; then
    echo "Database $USER exists"
else
    sudo -u postgres /usr/bin/createdb --echo --owner=$USER $USER
fi

sudo systemctl stop postgresql
  # Disable to lower initial overhead
sudo systemctl disable postgresql
