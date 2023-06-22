const ModbusRTU = require('modbus-serial');

const client = new ModbusRTU();
const host = '0.0.0.0'; 
const port = 5020; 

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
} 

client.connectTCP(host, { port: port })
  .then(async function () {
    console.log("Bağlantı başarıyla başlatıldı.\n")
    for (let i = 1; i <= 8; i++) {
        await client.writeCoil(i, true).then(() => console.log(`${i}. coil true oldu.`))
        await delay(3000);
    }
}).then(function () {
    client.readCoils(1, 8).then(async function (data) {
        console.log("\nbutun coillerin durumu: " + data.data+ " \n");
        await delay(5000);
    })
}).then(async function () {
    for (let i = 1; i <= 8; i++) {
        await client.writeCoil(i, false).then(() => console.log(`${i}. coil false oldu.`))
        await delay(3000);
    }
}).then(function() {
    client.readCoils(1, 8).then(async function (data) {
        console.log("butun coillerin durumu: " + data.data);
        await delay(5000);
    })
}).then(async function() {
    await client.close()
    console.log("\n Bağlantı koparıldı.")
}).catch((err) => {
    console.log("Bağlantıda hata oluştu.");
    console.log(err)
}) 