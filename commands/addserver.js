const { MessageEmbed } = require("discord.js")

module.exports = {
    name : "addserver",
    async execute(message, args, client) {
        const discordlink = args.shift()
        const color = args.shift()
        const name = args.join(" ")
        const channel = client.channels.cache.get('965847850602881025')
        const inviteinf = await client.fetchInvite(discordlink)
        const embed = new MessageEmbed()
        .setTitle(name)
        .setThumbnail(inviteinf.guild.iconURL())
        .setColor(color)
        .setDescription(`LINK: ${discordlink}`)
        channel.send({embeds: [embed]})
	},
}