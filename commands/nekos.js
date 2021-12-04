const neko = require("nekos.life");
module.exports = {
    name: 'nekos',
    async execute(message){
        const NekoClient = new neko()
        const image = await NekoClient.sfw.neko()
        message.channel.send({ content: image.url })
    }
}