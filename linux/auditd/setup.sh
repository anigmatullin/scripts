
sudo auditctl -l

sudo cp 50-audit-execve.rules   /etc/audit/rules.d

sudo augenrules --load

sudo cat /etc/audit/audit.rules

sudo auditctl -l

