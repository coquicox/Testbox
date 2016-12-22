/**
 * Created by matt on 12/22/16.
 */

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
    msg.reply('Pong!');
}
});

client.login('token');