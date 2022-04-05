<?php

require 'vendor/autoload.php';
require 'Ssh.php';
require 'Provision.php';

$prv = new Provision();

$prv->runScript("Update", "00-update.sh");
$prv->runScript("Basic", "01-basic.sh");
$prv->runScript("Docker", "02-docker.sh");

$prv->runScript("PHP", "03-php.sh");
$prv->runScript("Composer", "03-composer-global.sh", false);

$prv->runScript("NGinx", "04-nginx.sh");
$prv->runScript("NodeJS", "05-nodejs.sh", false);
$prv->runScript("SQLite", "06-sqlite.sh");
$prv->runScript("Mysql", "07-mysql.sh");
$prv->runScript("PostgreSQL", "08-pgsql.sh", false);

$prv->runScript("Redis", "09-redis.sh", true);
$prv->runScript("BeansTalk", "10-beanstalk.sh", false);
$prv->runScript("MailHog", "11-mailhog.sh", false);
$prv->runScript("Supervisor", "12-supervisor.sh", false);
$prv->runScript("NGrok", "13-ngrok.sh", false);
$prv->runScript("Postfix", "14-postfix.sh", true);

$prv->runScript("MOTD", "15-motd.sh", true);
$prv->runScript("Upgrade", "16-upgrade.sh", false);
$prv->runScript("Machine ID", "17-machineid.sh", false);
$prv->runScript("Enable Swap", "18-swap.sh", false);
$prv->runScript("Sysctl params", "19-sysctl.sh", true);
$prv->runScript("CleanUP", "20-cleanup.sh", true);
