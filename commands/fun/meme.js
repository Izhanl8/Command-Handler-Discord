const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    description: "give you a random meme",
    async run (client, message, args) { 
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Meme random for: r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setFooter('Not Footer')
        .setTimestamp()

        
  
        message.channel.send(memeEmbed);
    }
}