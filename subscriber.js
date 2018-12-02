const mqtt = require('mqtt')

const client = mqtt.connect('mqtt://localhost:1883')

client.subscribe("casa/#")

client.on('connect', () => {
console.log('connected')
})
client.on('message', (topic, message) => { 
console.log('received message %s %s', topic, message.toString())
})