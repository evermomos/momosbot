const fetch = require("node-fetch");
module.exports = {
    name: 'waif',
    async execute(message, args){
        fetch(`https://api.waifu.pics/${args[0]}/${args[1]}`)
        .then(res => res.json())
        .then(body => {
            if(!body.url) return message.channel.send({ content: "Invalid arguments, valid arguments are: <https://waifu.pics/more>"})
            return message.channel.send({content: body.url })
    
        })
    }
}