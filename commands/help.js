const {MessageEmbed} = require("discord.js")
module.exports = {
    name: 'help',
    execute(message){
        const embed = new MessageEmbed().setTitle("Help")
        .setColor('#0099ff')
        .setAuthor(`${message.author.username}`,`${message.author.avatarURL()}`)
        .addField('Commands', `La lista de comandos disponibles son:`)
        .addField('+waif', `(sfw or nsfw) (category)`, true)
        .addField('+manynekos', `(sfw or nsfw) (category)`, true)
        .addField('+nekos', `random neko image`, true)
        .addField('+thegame', `the funny game :D`, true)
        .addField('+olliemine', `tech player lmf`, true)
        .addField('+hexai', `olliemine's man \nmad at him`, true)
        .addField('+yurmac', `clickbait`, true)
        .addField('+dogpi', `q rico`, true)
        .addField('+luisraa', `alias [!luis]`, true)
        .addField('+help', `you just \n did it...`, true)
        .addField('+ping', `bot latency`, true)
        .addField('+bingchilling', `早上好中国 现在我有冰`, true)
        .addField('Categorias:', `https://waifu.pics/more`, true)
        .setImage('https://waifu.pics/favicon.png')
        .setDescription('Made by evermomos');
        message.channel.send({embeds: [embed]})
    }
}