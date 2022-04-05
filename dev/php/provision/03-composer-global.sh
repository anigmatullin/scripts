
composer global require "laravel/envoy=^2.0"
composer global require "laravel/installer=^4.0.2"
composer global require "laravel/spark-installer=dev-master"
composer global require "slince/composer-registry-manager=^2.0"
composer global require tightenco/takeout

chown -R $USER:$USER /home/$USER/.config

echo export PATH="$PATH:~/.config/composer/vendor/bin" >> ~/.profile
