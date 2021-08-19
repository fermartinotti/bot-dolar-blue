import { request } from 'https';

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
    
    const req = request(options, res => {        
        res.on('data', d => {
            var reqBody = d.toString();
            reqBody = JSON.parse(reqBody);
            return reqBody.venta;
        })
    })
      
    req.on('error', error => {
        console.error(error);
    })

    req.end();

}


export function ping(){
    console.log("ping");
}

