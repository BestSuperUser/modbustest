const ModbusRTU = require('modbus-serial');

const client = new ModbusRTU();
const host = '0.0.0.0';
const port = 5020;

client.connectTCP(host, { port: port })
  .then(function () {
    client.writeCoil(1, false).then(function (data) {
        console.log("success, false");
        client.close()
    })
})