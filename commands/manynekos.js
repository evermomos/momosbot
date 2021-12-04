const fetch = require("node-fetch");
module.exports = {
    name: 'manynekos',
    async execute(message, args){
        const postcontent = {exclude: []}
        fetch(`https://api.waifu.pics/many/${args[0]}/${args[1]}`,{
            method: 'POST',
            body: JSON.stringify(postcontent),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async res => {
            if(res.status != 200) return
            const body = await res.json()
            if(!body.files) return message.channel.send({ content: "Invalid arguments, valid arguments are: <https://waifu.pics/more>"})
            let links = ''
            for(let i = 0; i < 5; i++){
                links += `${body.files[i]}\n`
            } 
            message.channel.send({ content: links })
        })
    }
}