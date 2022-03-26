module.exports = {
    name: 'help',
    execute(message){
        message.channel.send({ content: 'La lista de comandos disponibles son:\n!waif (sfw or nsfw) (category) \n!manynekos (sfw or nsfw) (category) \n!nekos \n!thegame \n!olliemine \n!hexai \n!yurmac \n!dogpi \n!luisraa [alias !luis] \n!help \n!ping \n!bingchilling \nPuedes ver las categorias de los comandos en:\nhttps://waifu.pics/more '})
    }
}