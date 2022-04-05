<?php

class Provision
{
    protected $ssh;
    protected $logdir;

    public function __construct()
    {
        $dotenv = \Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->load();

//        //load dot env
//        $key = "/Users/aibulat/.ssh/id_ed25519";
//        $user = "aibulat";
//        $host = "192.168.35.129";
//        $logs = "/tmp/provision";

        //load dot env
        $key = $_ENV['ssh_key'];
        $user = $_ENV['ssh_user'];
        $host = $_ENV['ssh_host'];
        $logs = $_ENV['dir_logs'];

        $dt = (new DateTime())->format("Y-m-d_H-i-s");
        $this->logdir = "$logs/$dt";
        mkdir($this->logdir);

        $this->ssh = Ssh::create($user, $host)->usePrivateKey($key);
    }

    public function runScript(string $msg, string $script, bool $sudo = true)
    {
        $ssh = $this->ssh;
        $logdir = $this->logdir;

        $time_start = microtime(true);

        echo "\n";
        echo "Starting: " . $msg . "\n";

        if (!file_exists($script)) {
            echo "Task Failed\n";
            echo "File does not exist: $script\n";
            return false;
        }

        $ssh->upload($script, $script);

        if ($sudo) {
            $process = $ssh->execute("sudo bash $script");
        }
        else {
            $process = $ssh->execute("bash $script");
        }

        $success = $process->isSuccessful();

        if ($success) {
            echo "Task Successful\n";
        }
        else {
            echo "Task Failed\n";
        }

        $time_end = microtime(true);
        $time_diff = $time_end - $time_start;
        $time_diff = floor(1000 * $time_diff) / 1000;
        echo "Time: $time_diff seconds, excluding time for SSH connection\n";

        $out =  $process->getOutput();
        $fname = $logdir . "/" . $script . ".log";
        file_put_contents($fname, $out);

        echo "Output: $fname\n\n";
    }
}
