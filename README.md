# moss-shop-website
# Current development version (Github Pages)
[frodo-web.github.io/moss-shop-website](https://frodo-web.github.io/moss-shop-website/) 
# Release (Production)
[mox-pro.ru](https://mox-pro.ru) 
### Cloudflare IPs update scheduling
Since the server allow connections from Cloudflare only, it's good to check if Cloudflare change its IPs to automatically add them to Firewall.
Open crontab:
````
sudo crontab -e

````
And add the following rule:
````
0 0 * * 1 /full/path/cloudflare-ufw.sh > /dev/null 2>&1
````
[More about UFW configuration](https://github.com/Frodo-Web/frodo-tips/blob/main/ufw%20allow%20only%20cloudflare%20and%20ssh%20connections/ufw-cloudflare-and-ssh.md)
