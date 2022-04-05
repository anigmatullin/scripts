  # Install Nginx
  apt-get install -y --allow-downgrades --allow-remove-essential --allow-change-held-packages nginx

  rm /etc/nginx/sites-enabled/default
  rm /etc/nginx/sites-available/default

  # Create a configuration file for Nginx overrides.
  mkdir -p /home/vagrant/.config/nginx
  chown -R vagrant:vagrant /home/vagrant
  touch /home/vagrant/.config/nginx/nginx.conf
  ln -sf /home/vagrant/.config/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

  # Setup Some PHP-FPM Options
  sed -i "s/error_reporting = .*/error_reporting = E_ALL/" /etc/php/8.0/fpm/php.ini
  sed -i "s/display_errors = .*/display_errors = On/" /etc/php/8.0/fpm/php.ini
  sed -i "s/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/" /etc/php/8.0/fpm/php.ini
  sed -i "s/memory_limit = .*/memory_limit = 512M/" /etc/php/8.0/fpm/php.ini
  sed -i "s/upload_max_filesize = .*/upload_max_filesize = 100M/" /etc/php/8.0/fpm/php.ini
  sed -i "s/post_max_size = .*/post_max_size = 100M/" /etc/php/8.0/fpm/php.ini
  sed -i "s/;date.timezone.*/date.timezone = UTC/" /etc/php/8.0/fpm/php.ini

  printf "[openssl]\n" | tee -a /etc/php/8.0/fpm/php.ini
  printf "openssl.cainfo = /etc/ssl/certs/ca-certificates.crt\n" | tee -a /etc/php/8.0/fpm/php.ini

  printf "[curl]\n" | tee -a /etc/php/8.0/fpm/php.ini
  printf "curl.cainfo = /etc/ssl/certs/ca-certificates.crt\n" | tee -a /etc/php/8.0/fpm/php.ini

  # Disable XDebug On The CLI
  sudo phpdismod -s cli xdebug

  # Set The Nginx & PHP-FPM User
  sed -i "s/user www-data;/user vagrant;/" /etc/nginx/nginx.conf
  sed -i "s/# server_names_hash_bucket_size.*/server_names_hash_bucket_size 64;/" /etc/nginx/nginx.conf

  sed -i "s/user = www-data/user = vagrant/" /etc/php/8.0/fpm/pool.d/www.conf
  sed -i "s/group = www-data/group = vagrant/" /etc/php/8.0/fpm/pool.d/www.conf

  sed -i "s/listen\.owner.*/listen.owner = vagrant/" /etc/php/8.0/fpm/pool.d/www.conf
  sed -i "s/listen\.group.*/listen.group = vagrant/" /etc/php/8.0/fpm/pool.d/www.conf
  sed -i "s/;listen\.mode.*/listen.mode = 0666/" /etc/php/8.0/fpm/pool.d/www.conf

  service nginx restart
  service php8.0-fpm restart

  # Add Vagrant User To WWW-Data
  usermod -a -G www-data $USER
  id $USER
  groups $USER
