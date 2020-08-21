const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;


const bot = new Discord.Client({disableEveryone: true});
//If bot is on or not
bot.on("ready",  async() =>{
    console.log(`Bot is ready! ${bot.user.username}`);
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e){
        console.log(e.stack);
    }
});

//chat commands
bot.on('message', message =>{
  if(message.content === `${prefix}a`){
    message.channel.send(" y")
}

  if(message.content === "whos irrelevant?"){
    message.channel.send("ALONZO IS!")
  }


});

//embed commands




//game commands



bot.login(botSettings.token);
