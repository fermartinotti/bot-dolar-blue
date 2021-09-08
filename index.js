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
        enviarCotizaciones(message); 
    }
  
});

client.login(token);

async function actualizarPrecioEnEstado(){
    const precio= await precioService.obtenerPrecioDolarBlue();
    client.user.setActivity(`Precio: ${precio.venta}`, {type: 'WATCHING'});
}


async function enviarCotizaciones(message){
    const dolarBlue = await precioService.obtenerPrecioDolarBlue();
    const dolarOficial = await precioService.obtenerPrecioDolarOficial();
    const dolarCCL = await precioService.obtenerPrecioDolarCCL();
    const dolarTurista = await precioService.obtenerPrecioDolarTurista();
    const dolarBolsa = await precioService.obtenerPrecioDolarMEP();

    //creo un embed y lo envio
    const embed = new Discord.MessageEmbed()
    //.setColor()
    .setTitle("Cotizaciones")
    .setAuthor('El arbolito de la calle florida 💵', 'https://github.com/fermartinotti/bot-dolar-blue/blob/main/assets/dolar-blue-5jpg.jpg')
    .setDescription("Como suben los crocantes!")
    .setThumbnail("https://github.com/fermartinotti/bot-dolar-blue/blob/main/assets/dolar-logo.png")
    .addFields(
      //{ name: '\u200B', value: '\u200B' },
      { name: 'Dolar blue ', value: `Compra: $${dolarBlue.compra} Venta: $${dolarBlue.venta}`, inline: true },
      { name: `Dolar Oficial `, value: `Compra: $${dolarOficial.compra} Venta: $${dolarOficial.venta}`, inline: true },
      { name: `Dolar Turista `, value: `Compra: $${dolarTurista.compra} Venta: $${dolarTurista.venta}`, inline: true },
      { name: 'Dolar Bolsa ', value: `Compra: $${dolarBolsa.compra} Venta: $${dolarBolsa.venta} `, inline: true },
      { name: 'Dolar CCL ', value: `Compra: $${dolarCCL.compra} Venta: $${dolarCCL.venta}`, inline: true },
    )
      
    message.channel.send(embed);
  return;
}