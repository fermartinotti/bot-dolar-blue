const config = require('dotenv').config();
const https = require('https');

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
        message.reply(` Subio de nuevo `); 
    }
  
});

client.on("ready", function(message) {
    obtenerPrecioDolarBlue();
    
})

client.login(token);

function obtenerPrecioDolarBlue(){
    const options = {
        hostname: 'api-dolar-argentina.herokuapp.com',
        port:443,
        path: '/api/dolarblue',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
    }
    
    const req = https.request(options, res => {        
        res.on('data', d => {
            var reqBody = d.toString();
            reqBody = JSON.parse(reqBody);
            client.user.setActivity(`Precio: ${reqBody.venta}`, {type: 'WATCHING'});
        })
    })
      
    req.on('error', error => {
        console.error(error);
    })

    req.end();

}
