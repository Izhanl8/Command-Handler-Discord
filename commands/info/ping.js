const Discord = require('discord.js');

module.exports = {
  name: "ping",
  description: "Gives you latency",
  category: 'info',
  usage: '<prefix> + ping',

    timeout: 10000,
    run: async(client, message, args) => {
      message.channel.send("**Calculated...**").then(m =>{
        var ping = m.createdTimestamp - message.createdTimestamp;
        var embed = new Discord.MessageEmbed()
                  .setTitle('🏓Ping🏓')
                  .setDescription(`Your ping is ${ping}ms` )
                  .setColor("#CD3314")
                  m.edit(embed)
        .setColor("RANDOM");
      msg.edit(_);
      msg.edit("\u200B");
      });
    },
  };