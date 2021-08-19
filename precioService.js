const https = require('https');

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

module.exports = { obtenerPrecioDolarBlue };
