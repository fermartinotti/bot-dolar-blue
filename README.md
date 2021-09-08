# bot-dolar-blue
Bot para Discord encargado de informar el precio del dolar y sus variantes.

El Bot va a actualizar su estado con el precio actual del Dolar Blue

![bot screenshot](https://github.com/fermartinotti/bot-dolar-blue/blob/main/assets/bot.PNG)

Podes tambien preguntarselo

![bot_precio](https://github.com/fermartinotti/bot-dolar-blue/blob/main/assets/subio.png)

## Probalo! Sumalo a tu canal
[https://discord.com/api/oauth2/authorize?client_id=877697153156411432&permissions=0&scope=bot](https://discord.com/api/oauth2/authorize?client_id=877697153156411432&permissions=0&scope=bot)

## ¿Integraciones y dependencias? las siguientes:
[**discordJS**](https://discord.js.org/)

[**API-dolar-argentina**](https://github.com/Castrogiovanni20/api-dolar-argentina) API para obtener el precio de los diferentes tipos de cambio.

[**Node-cron**](https://www.npmjs.com/package/cron) Libreria para crear un job que actualice la informacion cada x tiempo. (en este caso el bot lo hace cada 1 hora).

## Comandos

- !dolar
Te devuelve los diferentes tipos de cambio del dolar.

## Environment Variables

Para correr el proyecto, es necesario agregar estas variables de entorno a tu .env

`TOKEN` - Token del bot de discord.

`PREFIX` - prefijo de los comandos generales.
  
## Run Locally

Clone the project

```bash
  git clone https://github.com/fermartinotti/bot-dolar-blue
```

Go to the project directory

```bash
  cd bot-dolar-blue
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node .
```
  
## Feedback o mejoras

Si tenes algun feedback o mejora que aportar al proyecto podes escribirme a mi email personal: fermartinotti@gmail.com o simplemente abrir un pull request.

  
