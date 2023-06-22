const ModbusRTU = require('modbus-serial');

// Modbus TCP cihazına bağlanma
const client = new ModbusRTU();
const host = '0.0.0.0'; // Modbus TCP sunucusunun IP adresi
const port = 5020; // Modbus TCP bağlantı noktası

client.connectTCP(host, { port: port })
  .then(function () {
    client.readCoils(1, 8).then(function (data) {
        console.log("first coil is: " + data.data[0]);
    })
})