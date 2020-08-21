const botSettings = require("./botSettings.json");
const Discord = require("discord.js")

const bot = new Discord.Client({disableEveryone: true});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ")
    let command = messageArray[0];
    let args = args.slice(1);


    console.log(messageArray);
    console.log(command);
    console.log(args);
});

bot.login(botSettings.token);