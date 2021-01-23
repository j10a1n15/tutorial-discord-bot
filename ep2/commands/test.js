const discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    message.channel.send("Hello World!");
}
module.exports.help = {
    name: "hello"
}