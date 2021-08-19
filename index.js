const config = require('dotenv').config();
const https = require('https');
const CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const precioService = require('./precioService');

const client = new Discord.Client();
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

var commandBody;
var args;
var command;

var job = new CronJob('0 * * * *', function() {
    actualizarPrecioEnEstado();
  });

client.once('ready', () => {
	console.log('Ready!');
    actualizarPrecioEnEstado();
    job.start();
});

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    commandBody = message.content.slice(prefix.length);
    args = commandBody.split(' ');
    command = args.shift().toLowerCase();

    if (command === "dolar") {
        message.reply(` Subio de nuevo `); 
    }
  
});

client.login(token);

async function actualizarPrecioEnEstado(){
    const precio= await precioService.obtenerPrecioDolarBlue();
    client.user.setActivity(`Precio: ${precio}`, {type: 'WATCHING'});
}
