const prefix = 'HH'
const discord = require('discord.js')
const bot = new discord.Client();
 
const token = 'NDk1MjcxMjg5OTU1NjgwMjU2.XXf6Bg.X523zra9OCkEY1rIZYqi_lwj1u8'
bot.on('ready', () => {
    bot.user.setActivity('Be sure to invite hedgehog#1704 to your server as he is my developer.|HHhelp', { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
    .catch(console.error);
 
    console.log('Hedgehog2.0 is online');
      console.log("Servers:")
    bot.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
});
    })
    })
})
bot.on('guildMemberAdd', (member) => {
    console.log(`${member.user.tag} joined ${member.guild.name}`)
    member.send(`Welcome ${member}, you joined ${member.guild.name}!`)
});
 
bot.on('message', msg => {
    if(msg.author.bot) return;
 
    if (msg.content === "Hi") {
        msg.channel.send(`Hello, ${msg.author}`);
    }
 
    if (msg.content.toLowerCase() === 'hhping') {
    msg.channel.send(`Pong!`);
    }
 
  if (msg.content.toLowerCase() === 'hhavatar') {
  const embed = new discord.RichEmbed()
  .setColor("RANDOM")
  .setImage(msg.author.avatarURL)
  .setDescription("Looking good :wink:")
  .setTimestamp()
   msg.channel.send(embed);
   }
 
    if (msg.content === "HHdm") {
        msg.author.send('Hello, I am Hedgehog2.0 nice to meet you :slight_smile:');
    }
 
    if (msg.content.toLowerCase() === "hhhelp") {
    msg.channel.send("**HHavatar - Shows your avatar\nHHping - Gets the bot to respond\nHHban - bans the mentioned user\nHHkick - kicks the mentioned user**\n**HHinvite - Gives the bot invite link**\nIf you wish to be updated anytime feel free to join my discord server Discord.gg/4VTN9Rt")
    }
 
    if (msg.content === "Beta") {
        msg.reply('This bot is in beta. Some commands might not work.');
    }
   
if (msg.content.toLowerCase() === 'hhinvite') {
        msg.channel.send("Invite the bot using this link!\n**https://discordapp.com/oauth2/authorize?client_id=495271289955680256&scope=bot&permissions=2146958847**")
    }
   
    if (msg.content.toLowerCase() === 'HHbug') {
        msg.channel.send("Report a bug using this link!\n**https://docs.google.com/forms/d/e/1FAIpQLSdPuxWwFCsm9RNQiZI5d8GfLrYPsQ0uTx16nmLUgLTL7VkUxA/viewform**")
   
    }
   
    const args = msg.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();  
   
    if (command === 'suggest'){
    const channel = msg.guild.channels.find(ch => ch.name === 'dank-leaders-chat');
   
    let send = new discord.RichEmbed()
    .setColor("PINK")
    .setTitle("Suggestion was sent!!")
    .setDescription(`**Here is your suggestion**\nYour suggestion was sent to ${channel}\n**Your Suggestion Was:**\n\n ` + args.join(' '))
    msg.author.send(send)
   
   
   
    let suggestion = new discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Suggestion Incoming!!")
    .setDescription(`**Suggested by ${msg.author}**\n\n ` + args.join(' '))
    channel.send(suggestion)
    }
    });
 
bot.on('message', msg => {
     
     let args = msg.content.substring(prefix.length).split(" ");
     
     switch (args[0]) {
         case "kick":
                 if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply("Hmmm it seems like you don't have permissions for this command!")
             const user = msg.mentions.users.first()
             
             if(user) {
                 const member = msg.guild.member(user);
                 
                 if(member) {
                     member.kick('Kicked from server').then(() => {
                         msg.reply(`${user.tag} has been kicked from the server.`);
                     }).catch(err => {
                         msg.reply('I was unable to kick this user')
                         console.log(err);
                       if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply("Sorry you dont' have permissions for this command!")
                     });
                 } else {
                     msg.reply("I cannot find that user. Are they in the server?")
                 }
             } else {
                 msg.reply("Please mention a user to kick.")
             }
         
         break;
     }
 });
 
bot.on('message', msg => {
     
     let args = msg.content.substring(prefix.length).split(" ");
     
     switch (args[0]) {
         case "ban":
                 if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply("Sorry you dont' have permissions for this command!")
             const user = msg.mentions.users.first()
             
             if(user) {
                 const member = msg.guild.member(user);
                 
                 if(member) {
                     member.ban('Banned from this server').then(() => {
                         msg.reply(`${user.tag} has been banned from the server.`);
                     }).catch(err => {
                         msg.reply('I was unable to ban this person')
                         console.log(err);
                       if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply("Sorry you dont' have permissions for this command!")
                     });
                 } else {
                     msg.reply("I cannot find that user. Are they in the server?")
                 }
             } else {
                 msg.reply("Please mention a person to ban.")
             }
         
         break;
     }
})
 });
bot.login('NDk1MjcxMjg5OTU1NjgwMjU2.XXf6Bg.X523zra9OCkEY1rIZYqi_lwj1u8')