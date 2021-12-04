module.exports = {
    name: 'help',
    execute(message){
        message.channel.send({ content: 'La lista de comandos disponibles son: !waif, !nekos, !manynekos, !thegame, !olliemine, !help, !ping, !bingchilling, '})
    }
}