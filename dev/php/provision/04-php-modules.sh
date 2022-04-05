sudo apt-get install php-mailparse
ls /etc/php/8.0/fpm/conf.d/25-mailparse.ini


sudo apt-get install unixodbc unixodbc-dev
sudo apt-get install freetds-dev freetds-bin tdsodbc

curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -

lsb_release -a

curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list | sudo tee /etc/apt/sources.list.d/mssql-release.list > /dev/null


sudo apt-get update
sudo ACCEPT_EULA=Y apt-get install -y msodbcsql17
# optional: for bcp and sqlcmd
sudo ACCEPT_EULA=Y apt-get install -y mssql-tools
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.profile
source ~/.profile
# optional: for unixODBC development headers
sudo apt-get install -y unixodbc-dev

sudo pecl install sqlsrv
sudo pecl install pdo_sqlsrv

echo "extension=sqlsrv.so" | sudo tee /etc/php/8.0/fpm/conf.d/20-sqlsrv.ini
echo "extension=sqlsrv.so" | sudo tee /etc/php/8.0/cli/conf.d/20-sqlsrv.ini

echo "extension=pdo_sqlsrv.so" | sudo tee /etc/php/8.0/fpm/conf.d/21-pdo_sqlsrv.ini
echo "extension=pdo_sqlsrv.so" | sudo tee /etc/php/8.0/cli/conf.d/21-pdo_sqlsrv.ini

sudo systemctl restart php8.0-fpm
