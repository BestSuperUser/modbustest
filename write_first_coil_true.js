const ModbusRTU = require('modbus-serial');

// Modbus TCP cihazına bağlanma
const client = new ModbusRTU();
const host = '0.0.0.0'; // Modbus TCP sunucusunun IP adresi
const port = 5020; // Modbus TCP bağlantı noktası

client.connectTCP(host, { port: port })
  .then(function () {
    client.writeCoil(1, true).then(function (data) {
        console.log("success, true");
        client.close()
    })
})