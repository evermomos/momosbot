const fetch = require("node-fetch");
module.exports = {
    name: 'waif',
    async execute(message, args){
        fetch(`https://api.waifu.pics/${args[0]}/${args[1]}`)
        .then(async res => {
			if(res.status !== 200) return message.channel.send({ content: `Error ${res.status} ${res.statusText}` });
			const body = await res.json()
			if(!body.url) return message.channel.send({ content: "Invalid arguments, valid arguments are: <https://waifu.pics/more>"})
            if(args[0].toLowerCase() === 'nsfw' && message.guild !== null)
            if(args[0].toLowerCase() === 'nsfw' && !message.channel.nsfw) return message.channel.send({content: 'Este comando solo puede ser usado en canales NSFW.'})
            return message.channel.send({content: body.url })
    
        })
    }
}