const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "Command ban (Banned a members in your server)!",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't use that!")
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I don't have permissions")

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Please specify a user');

        if(!member) return message.channel.send('Give me a valid username!');
        if(!member.bannable) return message.channel.send('This user cannot kicked!');

        if(member.id === message.author.id) return message.channel.send("You really want to kick yourself?");

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.ban(reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        const embed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setColor('#F7A707')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Banned by', message.author)
        .addField('Reason', reason)
        .setFooter('Time Banned', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(embed);


    }
}