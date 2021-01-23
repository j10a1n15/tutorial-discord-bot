const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const embed = new discord.MessageEmbed()
        .setColor(config.color)
        .setTitle('title')
        .setURL('https://discord.js.org/')
        .setAuthor('name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('description')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'title', value: 'value', inline: false },
        )
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp('timestamp')
        .setFooter('footer', 'https://i.imgur.com/wSTFkRM.png');

    message.channel.send(embed);
}
module.exports.help = {
    name: "embed"
}