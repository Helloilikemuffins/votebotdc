const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'PLACEHOLDER'; // Token 

bot.login(token); // login the bot with your token.

bot.on('message', message => {
    if (message.channel.id === 'PLACEHOLDER') {  // Channel ID 
        message.react('👍')
        message.react('👎')
    }

    if (message.content.toLowerCase() === "-info")
    {   
        message.channel.send("Hello there. I am VoteBot and I will add up/downvote reactions messages.")
    }
    if (message.content.toLocaleLowerCase() === "-bottest")
    { 
        message.channel.send("I am up, running and self aware!")
    }
    if (message.content.toLocaleLowerCase() === "-votehelp")
    {    
        message.channel.send("Something not working? DM MrMuffin#9103 for assistance. Commands are: -info ; -bottest ; -votehelp")
    }
})
