const fetch = require("node-fetch");
const Discord = require("discord.js");
const neko = require("nekos.life");
const client = new Discord.Client({ intents: ["GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "GUILDS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_TYPING"], partials: ["CHANNEL"]} );
const fs = require("fs");
client.commands = new Discord.Collection()
const prefix = "!"
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
const NekoClient = new neko()
const config = require("./config")


