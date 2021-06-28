const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'PLACEHOLDER'; // Token hierher

bot.login(token); // login the bot with your token.

bot.on('message', message => {
    if (message.attachments = true) {
        message.react(':upvote:665319797894152203')
        message.react(':downvote:665319859294568498')
    }

    if (message.content.toLowerCase() === "-info")
    {   
        message.channel.send("Hello there")
    }
    if (message.content.toLowerCase() === "ping")
    {   
        message.channel.send("pong! Gotchu fam")
    }
    if (message.content.toLocaleLowerCase() === "!bottest")
    { 
        message.channel.send("I am up, running and self aware!")
    }
    if (message.content.toLocaleLowerCase() === "!votebot")
    {   
        message.channel.send("Hello. I am VoteBot and I will add up/downvote reactions to pictures")
    }
    if (message.content.toLocaleLowerCase() === "!votehelp")
    {    
        message.channel.send("Am I not working? DM MrMuffin#9103 for assistance.")
    }
    if (message.content.toLocaleLowerCase() === "I fucking love you VoteBot")
    {
        message.channel.send("Love you too <3")
    }
})