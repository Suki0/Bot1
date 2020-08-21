const botSettings = require("./botSettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;


bot.on("message", message =>{
  if(message.content === "space"){
    message.channel.reply("cadet")
  }
})

bot.login(botSettings.token);
