# Disable sleep https://github.com/laravel/homestead/issues/1624
systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target

# What are you doing Ubuntu?
# https://askubuntu.com/questions/1250974/user-root-cant-write-to-file-in-tmp-owned-by-someone-else-in-20-04-but-can-in
sysctl fs.protected_regular=0
