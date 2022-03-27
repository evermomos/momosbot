module.exports = {
    name: 'ping',
    execute(message){
        message.channel.send({ content: `Bot latency ${Date.now()-message.createdTimestamp}ms :cold_face: `})
    }
}