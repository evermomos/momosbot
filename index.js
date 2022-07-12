const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "GUILDS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_TYPING"], partials: ["CHANNEL"]} );
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection();
const fs = require("fs");
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
const prefix = "+"
client.login(process.env.TOKEN)
client.on("ready", () => {
    client.user.setPresence({
        status: "online",
        activities: [{
        name: "+help",
        type: "STREAMING",
        url: "http://www.twitch.tv/evermomos",
    }]
    })
    console.log("Bot Started");
})

client.on("messageCreate", async message => {
    if(message.author.bot) return
    if(message.content.startsWith(`<@!916488139458105365>`)){
        message.channel.send({content: 'https://media.discordapp.net/attachments/935989994735169546/949267971602255942/image0-44-1.gif'})
        return
    }
    if(message.content.startsWith('si caben o no')){
        message.channel.send({content: 'si cabeeen'})
        return
    }
    if(!message.content.startsWith(prefix)) return
    let args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase();
    if(!client.commands.has(commandName) && !client.aliases.has(commandName)) return
    const command = client.commands.get(commandName) || client.aliases.get(commandName) 
    try{
        command.execute(message, args, client);
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
	//Checks if alias is in a command, if so it adds it to the collection
	if (command.aliases) {
		command.aliases.forEach(alias => {
			client.aliases.set(alias, command);
		});
	}
}
