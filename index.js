const fetch = require("node-fetch");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "GUILDS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_TYPING"], partials: ["CHANNEL"]} );
client.commands = new Discord.Collection()
const fs = require("fs");
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
const prefix = "!"
client.login(process.env.TOKEN)

client.on("ready", () => {
    client.user.setPresence({
        status: "online",
        activities: [{
        name: "Catgirsl",
        type: "PLAYING"
    }]
    })
    console.log("balls ready!");
 });
 client.on("messageCreate", async message => {
    if(message.author.bot) return
    if(!message.content.startsWith(prefix)) return
    let args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase();
    if(!client.commands.has(commandName)) return
    const command = client.commands.get(commandName) 
    try{
        command.execute(message, args);
    }catch(error){
        console.log(error)
        message.channel.send({ content: 'Unexpected error dumbass!'})
    }
    return

})
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    console.log(command.name)
    client.commands.set(command.name, command);
}
