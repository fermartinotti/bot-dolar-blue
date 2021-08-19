
const config = require('dotenv').config();
const https = require('https');
var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
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

async function obtenerPrecioDolarBlue(){
    const options = {
        hostname: 'api-dolar-argentina.herokuapp.com',
        port:443,
        path: '/api/dolarblue',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
    }
    return new Promise((resolve) =>{
    const req = https.request(options, res => {        
        res.on('data', d => {
            var reqBody = d.toString();
            reqBody = JSON.parse(reqBody);
            resolve(reqBody.venta);
        })
    })
      
    req.on('error', error => {
        console.error(error);
    })

    req.end();
    });
}

async function actualizarPrecioEnEstado(){
    const precio= await obtenerPrecioDolarBlue();
    client.user.setActivity(`Precio: ${precio}`, {type: 'WATCHING'});
}
