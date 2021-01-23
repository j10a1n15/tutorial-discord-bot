const discord = require("discord.js");
const config = require("./config.json");
const bot = new discord.Client();

bot.on("ready", async () => {
  console.log("Ready!");
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if(command === `${prefix}test`){
    message.channel.send("Hello World!");
  }
});

bot.login(config.token);