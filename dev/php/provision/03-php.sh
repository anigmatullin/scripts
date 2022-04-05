apt-add-repository ppa:ondrej/php -y

  # PHP 8.0
apt-get install -y --allow-change-held-packages \
  php8.0 php8.0-bcmath php8.0-bz2 php8.0-cgi php8.0-cli php8.0-common php8.0-curl php8.0-dba php8.0-dev \
  php8.0-enchant php8.0-fpm php8.0-gd php8.0-gmp php8.0-imap php8.0-interbase php8.0-intl php8.0-ldap \
  php8.0-mbstring php8.0-mysql php8.0-odbc php8.0-opcache php8.0-pgsql php8.0-phpdbg php8.0-pspell php8.0-readline \
  php8.0-snmp php8.0-soap php8.0-sqlite3 php8.0-sybase php8.0-tidy php8.0-xdebug php8.0-xml php8.0-xsl php8.0-zip \
  php8.0-memcached php-mailparse

update-alternatives --set php /usr/bin/php8.0
update-alternatives --set php-config /usr/bin/php-config8.0
update-alternatives --set phpize /usr/bin/phpize8.0

# Install Composer
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

# Set Some PHP CLI Settings
sed -i "s/error_reporting = .*/error_reporting = E_ALL/" /etc/php/8.0/cli/php.ini
sed -i "s/display_errors = .*/display_errors = On/" /etc/php/8.0/cli/php.ini
sed -i "s/memory_limit = .*/memory_limit = 512M/" /etc/php/8.0/cli/php.ini
sed -i "s/;date.timezone.*/date.timezone = UTC/" /etc/php/8.0/cli/php.ini

