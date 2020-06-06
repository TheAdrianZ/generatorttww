const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.RichEmbed()
    .setTitle('Gen Commands')
    .setColor(bot.color)
    .setDescription('This Help command is for you to understand the commands of the free gen.')
    .addField('!gen Roblox', 'Roblox with robux,old acc,stacked with items and much more')
    .setFooter('Made by DarkCoder#0001')
    .setTimestamp()
       message.channel.send(embed) 
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}