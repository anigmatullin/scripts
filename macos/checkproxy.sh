echo
echo

echo "HTTP Proxy:"
networksetup -getwebproxy "Wi-Fi"

echo
echo

echo "HTTPS Proxy:"
networksetup -getsecurewebproxy "Wi-Fi"

echo
echo

scutil --proxy

