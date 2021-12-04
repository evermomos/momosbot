module.exports = {
    name: 'ping',
    execute(message){
        message.channel.send({ content: `${Date.now()-message.createdTimestamp}ms`})
    }
}