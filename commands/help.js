module.exports = {
    name: 'help',
    execute(message){
        message.channel.send({ content: 'La lista de comandos disponibles son: !waif (sfw or nsfw) (category), !nekos, !manynekos (sfw or nsfw) (category), !thegame, !olliemine, !help, !ping, !bingchilling, Puedes ver las categorias en: https://waifu.pics/more '})
    }
}