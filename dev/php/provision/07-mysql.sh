  # Install MySQL
  echo "mysql-server mysql-server/root_password password secret" | debconf-set-selections
  echo "mysql-server mysql-server/root_password_again password secret" | debconf-set-selections
  apt-get install -y mysql-server

  # Configure MySQL 8 Remote Access and Native Pluggable Authentication
  cat > /etc/mysql/conf.d/mysqld.cnf << EOF
[mysqld]
bind-address = 0.0.0.0
default_authentication_plugin = mysql_native_password
EOF

  # Configure MySQL Password Lifetime
  echo "default_password_lifetime = 0" >> /etc/mysql/mysql.conf.d/mysqld.cnf

  # Configure MySQL Remote Access
  sed -i '/^bind-address/s/bind-address.*=.*/bind-address = 0.0.0.0/' /etc/mysql/mysql.conf.d/mysqld.cnf
  sudo systemctl restart mysql

  export MYSQL_PWD=secret

  sudo mysql -e "CREATE USER $USER"
  sudo mysql -e "GRANT ALL PRIVILEGES ON *.* TO '$USER' WITH GRANT OPTION;"

  sudo mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'secret';"
  sudo mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;"

  sudo mysql -e "FLUSH PRIVILEGES;"


  sudo tee /home/$USER/.my.cnf <<EOL
[mysqld]
character-set-server=utf8mb4
collation-server=utf8mb4_bin
EOL
  sudo systemctl restart mysql

