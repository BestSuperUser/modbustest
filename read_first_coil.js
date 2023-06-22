const ModbusRTU = require('modbus-serial');

const client = new ModbusRTU();
const host = '0.0.0.0'; 
const port = 5020; 

client.connectTCP(host, { port: port })
  .then(function () {
    client.readCoils(1, 8).then(function (data) {
        console.log("first coil is: " + data.data[0]);
        client.close()
    })
})