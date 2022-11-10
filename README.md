# moss-shop-website
### Current development version (Github Pages)
[frodo-web.github.io/moss-shop-website](https://frodo-web.github.io/moss-shop-website/) 
### Release
[mox-pro.ru](https://mox-pro.ru) 
# Rotating logs system
Logs rotation (lifetime) is 31 days. The max filesize is 2MB. Logs get compressed on the second day. <br> <br>
These are file templates: 
- connections-moxpro-%DATE%.log(?.gz) - logs the connections, server access data (an example below)
- runtime-moxpro-%DATE%.log(?.gz) - logs all the logic the server does (an example below)
- error-connections-moxpro-%DATE%.log(?.gz) - logs all the errors happened on the server access/connection
- error-runtime-moxpro-%DATE%.log(?.gz) - logs all the errors happened on the server runtime

### connections-moxpro-%DATE%.log(?.gz) example:
````
2022-11-10T15:20:41.858Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http / Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:42.210Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /main.js Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.001Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/react/home/section4-1-touch.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.021Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/logo2.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.023Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/react/home/cyan-moss-cropped-compressed.webp Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.024Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/logo.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.024Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/5f060e75a7d9ac9941b96.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.028Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/react/home/tv-cropped-compressed.webp Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.031Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/react/catalog/moss-yagel.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.032Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/react/home/red-moss-cropped-compressed.webp Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.053Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/fern-previewf3662ae5cff7001169c0.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.055Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/moss-graphite-frame-preview2ed06ec85b116ef3f746.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.057Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/Kazakhstan%20flag94eace41dca65d51fc5e.svg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.058Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/panno-family-preview8eaee82ac39e4b71d0fe.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.059Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/Russia%20flagb41328698709cf180d8d.svg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.060Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/39320d6325b6ebf5abd66.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.061Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/Belarus%20flaga7e84d22d1f53996d1c7.svg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.062Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/moss-composition-preview9f583dafea1c884c1fd7.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.065Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/cancel-icon8d381f45942fde15e64e.svg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.066Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/moss-yagel-preview10e7a7d373d14b145132.jpg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
2022-11-10T15:20:43.067Z                cf-connecting-ip: 109.197.207.91 x-forwarded-for: 109.197.207.91 GET http /images/css/whatsapp4cffec1abf0dc0ee1192.svg Mozilla/5.0 (Linux; U; Android 12; ru-ru; Mi 11 Lite Build/SKQ1.210908.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36 XiaoMi/MiuiBrowser/13.16.1-gn
````
### runtime-moxpro-%DATE%.log(?.gz) example:
````
2022-11-10T15:16:21.974Z                listening on port 80
2022-11-10T15:17:30.132Z                order_POST: provided values: +7 (###) ###-##-## Кочка европейская Андрей Здесь должны быть пожелания
2022-11-10T15:17:32.679Z                order_POST -> axios.get: Telegram notification is successfull {"ok":true,"result":{"message_id":44,"from":{"id":#######,"is_bot":true,"first_name":"###########","username":"####"},"chat":{"id":#######,"title":"Mox'Pro Заказы","type":"supergroup"},"date":1668093452,"text":"Поступил заказ с номера: ➡️ + 7 (###) ###-##-## ⬅️, клиента заинтересовал продукт:➡️ Кочка европейская ⬅️, клиент представился как ➡️ Андрей ⬅️и написал следующие пожелания: ➡️ Здесь должны быть пожелания ⬅️"}}
````
# Cloudflare IPs update scheduling
Since the server allow connections from Cloudflare servers only, we need to check if Cloudflare changed its IPs to automatically add and allow them to Firewall.
Open crontab:
````
sudo crontab -e

````
### To update Cloudflare IPs every Monday at 12:00 p.m. UTC add the following rule:
````
0 12 * * 1 /full/path/cloudflare-ufw.sh > /dev/null 2>&1
````
[More about UFW configuration](https://github.com/Frodo-Web/frodo-tips/blob/main/ufw%20allow%20only%20cloudflare%20and%20ssh%20connections/ufw-cloudflare-and-ssh.md)
# Telegram token
When a visitor places an order on the website the back-end sends requests to a Telegram bot.
The bot is located in a private group and makes announcements there. <br>
To give the backend permissions to send the bot those requests the Token is required.
### Create config/local.json and add the bot token in the following format:
````
// config/local.json
{
    "token": "5748081196:AAEBRXwAQWwehwXD7Mnkz88jzNw11vS4kxk"   // Replace this token with yours
}
````

