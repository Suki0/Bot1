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

bot.on('message', message =>{
  if(message.content === `${prefix}a`){

  }
})

bot.on("message", message =>{
  if(message.content === `${prefix}Roles`){
    guild.roles.create({
      data: {
        name: 'Super Cool People',
        color: 'BLUE',
      },
      reason: 'we needed a role for Super Cool People',
    })
      .then(console.log)
      .catch(console.error);
  }
});
bot.on("message",  message =>{
    if(message.content === prefix + "youtube" ){
        message.channel.send("https://www.youtube.com/spook_uwu")
    }

    if(message.content === "alide"){
        message.channel.send("iscool")

    }

if(message.content === prefix + 'shit'){
  message.channel.send('shitititit')
}

  if(message.content === prefix + 'gay'){
    message.channel.send('pride', {files: ["./gay.png"
  ]});
  }

    if (message.content === prefix + 'nut'){
        message.channel.send('nut', {files: ["./nut.png"

    ]
    });

    }

  if(message.content === prefix + 'ping'){
    message.channel.send('pong')
  }

  if(message.content === prefix + 'BotCreator'){
    message.channel.send("aven#3572")
  }

  if(message.content === prefix + 'retardism'){
    message.channel.send(`${message.author} is a retard`)
  }
  if(message.content === "whos a retard?"){
    message.channel.send("spacecadet is!")
  }
  if(message.content === "whos a bitch?"){
    message.channel.send("RAN IS!")
  }
  if(message.content === "whos an idiot"){
    message.channel.send("aven the fucking moron")
  }

  if(message.content === prefix + "bal"){
    message.channel.send("The irs took all your money")

  }
  if(message.content === prefix + "work"){
    message.channel.send("You robbed jesus the irs is coming for you, though have 200$")
  }
  //if(message.content  === prefix + " ", "", "  "){
    //message.channel.send("CMON M8 FUCKING SAY SOMETHING")/
//}

if(message.content === "whos irrelevant?"){
  message.channel.send("alonzo is!")}
})
/// bot game commands












//embed
bot.on('message', message =>{
  if (message.content === `${prefix}help`){

    const embed2 = new Discord.MessageEmbed()
    .setAuthor(message.member)
    .setDescription(".bal to check balance")
    .setColor(0xff0000)
    message.channel.send(embed2)


  }
})

//plays music
bot.on("message",  message => {

    if(message.content == prefix + 'da'){
        message.channel.send(message.author.displayAvatarURL());
    }
    if(message.content == "whos a roach?"){
      message.channel.send("<@639816265669672980> is!")
    }


});

//command things wiwth prefix
bot.on("message",  message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ")
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}sh`) {
        let embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username)
            .setDescription("api")
            .setColor("#000000")
            .addField("Tag", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID", message.author.id)
            .addField("Account Creation Date", message.author.createdAt);

            message.channel.send(embed);

            return;





        }});



      bot.on('message', message => {
            // Ignore messages that aren't from a guild
            if (!message.guild) return;

            // If the message content starts with "!kick"
            if (message.content.startsWith('.kick')) {
              // Assuming we mention someone in the message, this will return the user
              // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
              const user = message.mentions.users.first();
              // If we have a user mentioned
              if (user) {
                // Now we get the member from the user
                const member = message.guild.member(user);
                // If the member is in the guild
                if (member) {
                  /**
                   * Kick the member
                   * Make sure you run this on a member, not a user!
                   * There are big differences between a user and a member
                   */
                  member
                    .kick('Optional reason that will display in the audit logs')
                    .then(() => {
                      // We let the message author know we were able to kick the person
                      message.reply(`Successfully kicked ${user.tag}`);
                    })
                    .catch(err => {
                      // An error happened
                      // This is generally due to the bot not being able to kick the member,
                      // either due to missing permissions or role hierarchy
                      message.reply('I was unable to kick the member');
                      // Log the error
                      console.error(err);
                    });
                } else {
                  // The mentioned user isn't in this guild
                  message.reply("That user isn't in this guild!");
                }
                // Otherwise, if no user was mentioned
              } else {
                message.reply("You didn't mention the user to kick!");
              }


            }
          });


          bot.on('message', message => {
            // Ignore messages that aren't from a guild
            if (!message.guild) return;

            // If the message content starts with "!kick"
            if (message.content.startsWith('.ban')) {
              // Assuming we mention someone in the message, this will return the user
              // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
              const user = message.mentions.users.first();
              // If we have a user mentioned
              if (user) {
                // Now we get the member from the user
                const member = message.guild.member(user);
                // If the member is in the guild
                if (member) {
                  /**
                   * Kick the member
                   * Make sure you run this on a member, not a user!
                   * There are big differences between a user and a member
                   */
                  member
                    .ban('Optional reason that will display in the audit logs')
                    .then(() => {
                      // We let the message author know we were able to kick the person
                      message.reply(`Successfully banned ${user.tag}`);
                    })
                    .catch(err => {
                      // An error happened
                      // This is generally due to the bot not being able to kick the member,
                      // either due to missing permissions or role hierarchy
                      message.reply('I was unable to ban the member');
                      // Log the error
                      console.error(err);
                    });
                } else {
                  // The mentioned user isn't in this guild
                  message.reply("That user isn't in this guild!");
                }
                // Otherwise, if no user was mentioned
              } else {
                message.reply("You didn't mention the user to ban");
              }
            }
          });

bot.login(botSettings.token);
