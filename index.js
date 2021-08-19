const config = require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

var commandBody;
var args;
var command;

client.once('ready', () => {
	console.log('Ready!');
});


client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    commandBody = message.content.slice(prefix.length);
    args = commandBody.split(' ');
    command = args.shift().toLowerCase();

    if (command === "dolar") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(` Subio de nuevo `);
    }
  
});


client.login(token);