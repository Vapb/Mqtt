const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883')

var interval = setInterval( function() {
sendData()
},2000)

client.on('message', () => {
console.log('message')
})
function sendData()
{
console.log('publishing')

client.publish("casa/voltagem",randomInt(0,100).toString())
client.publish("casa/humidity",randomInt(0,80).toString())
client.publish("greenhouse/temp",randomInt(20,30).toString())

console.log('published')
}
function randomInt (low, high) {
return Math.floor(Math.random() * (high - low) + low);
}