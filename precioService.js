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
            resolve(reqBody);
        })
    })
      
    req.on('error', error => {
        console.error(error);
    })

    req.end();
    });
}

async function obtenerPrecioDolarOficial(){
    const options = {
        hostname: 'api-dolar-argentina.herokuapp.com',
        port:443,
        path: '/api/dolaroficial',
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
            resolve(reqBody);
        })
    })
      
    req.on('error', error => {
        console.error(error);
    })

    req.end();
    });
}

async function obtenerPrecioDolarCCL(){
    const options = {
        hostname: 'api-dolar-argentina.herokuapp.com',
        port:443,
        path: '/api/contadoliqui',
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
            resolve(reqBody);
        })
    })
      
    req.on('error', error => {
        console.error(error);
    })

    req.end();
    });
}

async function obtenerPrecioDolarTurista(){
    const options = {
        hostname: 'api-dolar-argentina.herokuapp.com',
        port:443,
        path: '/api/dolarturista',
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
            resolve(reqBody);
        })
    })
      
    req.on('error', error => {
        console.error(error);
    })

    req.end();
    });
}

async function obtenerPrecioDolarMEP(){
    const options = {
        hostname: 'api-dolar-argentina.herokuapp.com',
        port:443,
        path: '/api/dolarbolsa',
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
            resolve(reqBody);
        })
    })
      
    req.on('error', error => {
        console.error(error);
    })

    req.end();
    });
}

module.exports = { obtenerPrecioDolarBlue, obtenerPrecioDolarCCL, obtenerPrecioDolarMEP, obtenerPrecioDolarMEP, obtenerPrecioDolarOficial, obtenerPrecioDolarTurista };
