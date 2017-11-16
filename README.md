# Discord Self Bot
A Discord Self Bot made with ❤, using discord.js  

[![GitHub release](https://img.shields.io/github/release/snkrsnkampa/Discord-SelfBot.svg?style=flat)](https://github.com/snkrsnkampa/Discord-SelfBot/releases)
[![Dependencies](https://david-dm.org/snkrsnkampa/Discord-SelfBot.svg)](https://david-dm.org/snkrsnkampa/Discord-SelfBot)
[![license](https://img.shields.io/github/license/snkrsnkampa/Discord-SelfBot.svg)](LICENSE)

**What is a self bot?**  
Using a Discord user account (your own Discord account) as a bot,
that **only responds to your own commands**, is a self bot.

```diff
- DISCLAIMER -
DON'T come to me if you get banned for using a self bot.
```

## Get started

*Make sure you have Node.js > v8 installed.*

1.  Clone this repository
```bash
git clone https://github.com/snkrsnkampa/Discord-SelfBot.git
```

2.  Install dependencies
```bash
cd Discord-SelfBot && npm install --only=production
```

3.  Make copies of the following files
```bash
settings/config_example.json
settings/credentials_example.json
```
and rename them, respectively, to
```bash
settings/config.json
settings/credentials.json
```

4.  Edit the `config.json` file and customize as per your requirements
```js
{
    "prefix": "/",
    "status": "online", /* online / idle / dnd / invisible */
    "activity": {
      "name": "", /* Your game text */
      "type": "" /* WATCHING / LISTENING / PLAYLING */
    }
}
```
Edit the `credentials.json` file and customize as per your requirements
```js
{
    "clientID": "", // Your ID
    "token": "" // Your token
}
```

5.  Run the self bot
```bash
node .
```

## Supporting the project
If you like this project you can **⭐ Star** it and show your ❤  
Or you can contribute to the project to improve it.

## Contact me
If you'd like to contact me, you can visit my website: <https://sankarsankampa.com>.  
Or you can find me on [Discord](https://discordapp.com) as **k3rn31p4nic#8383**
in the [Bastion Bot: Discord Server](https://discord.gg/fzx8fkt).
