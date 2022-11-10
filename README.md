# moss-shop-website
# Current development version (Github Pages)
[frodo-web.github.io/moss-shop-website](https://frodo-web.github.io/moss-shop-website/) 
# Release
[mox-pro.ru](https://mox-pro.ru) 
### Cloudflare IPs update scheduling
Since the server allow connections from Cloudflare servers only, we need to check if Cloudflare changed its IPs to automatically add and allow them to Firewall.
Open crontab:
````
sudo crontab -e

````
To update Cloudflare IPs every Monday at 12:00 p.m. UTC add the following rule:
````
0 12 * * 1 /full/path/cloudflare-ufw.sh > /dev/null 2>&1
````
[More about UFW configuration](https://github.com/Frodo-Web/frodo-tips/blob/main/ufw%20allow%20only%20cloudflare%20and%20ssh%20connections/ufw-cloudflare-and-ssh.md)
### Telegram token
When a visitor places an order on the website the back-end sends requests to a Telegram bot.
The bot is located in a private group and makes announcements there. <br>
To give the backend permissions to send the bot those requests the Token is required.
#### Create config/local.json and add the bot token in the following format:
````
// config/local.json
{
    "token": "5748081196:AAEBRXwAQWwehwXD7Mnkz88jzNw11vS4kxk"   // Replace this token with yours
}
````

