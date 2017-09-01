# Discord Self Bot
A Discord Self Bot made with :heart:, using discord.js  

[![Bastion Bot: Discord Server](https://discordapp.com/api/guilds/267022940967665664/embed.png)](https://discord.gg/fzx8fkt)
[![GitHub release](https://img.shields.io/github/release/snkrsnkampa/Discord-SelfBot.svg?style=flat)](https://github.com/snkrsnkampa/Discord-SelfBot/releases)
[![Dependencies](https://david-dm.org/snkrsnkampa/Discord-SelfBot.svg)](https://david-dm.org/snkrsnkampa/Discord-SelfBot)
[![license](https://img.shields.io/github/license/snkrsnkampa/Discord-SelfBot.svg)](LICENSE)

**What is a self bot?**  
Using a Discord user account (your own Discord account) as a bot,
that **only responds to your own commands**, is a self bot.

## Get started
1. Clone this repository
```bash
git clone https://github.com/snkrsnkampa/Discord-SelfBot.git
```

2. Install dependencies
```bash
cd Discord-SelfBot && npm install --production
```

3. Make copies of the following files
```bash
settings/config_example.json
settings/credentials_example.json
```
and rename them, respectively, to
```bash
settings/config.json
settings/credentials.json
```

4. Edit the `config.json` file and customize as per your requirements
```js
{
    "prefix": "/",
    "status": "online", /* online / idle / dnd / invisible */
    "game": ""
}
```
Edit the `credentials.json` file and customize as per your requirements
```js
{
    "clientID": "", // Your ID
    "token": "" // Your token
}
```

5. Run the self bot
```bash
node .
```

## Supporting the project
If you like this project you can **⭐ Star** it and show your :heart:  
You can also support by donating by via Patreon or PayPal!  

<a href="https://www.patreon.com/snkrsnkampa" title="Pledge on Patreon">
<img src="https://s7.postimg.org/m5awszoyz/patreon.jpg" alt="Pledge on Patreon" height="100">
</a>
<a href="https://paypal.me/snkrsnkampa" title="Donate via PayPal">
<img src="https://s1.postimg.org/wbhh3ef5b/paypal.jpg" alt="Donate via PayPal" height="100">
</a>
