const twilio = require('twilio');
const logger = require('../logs/reqLogger')

const accountSid = "ACbb6306995551deb114b12264b3e72a84"
const authToken = "f484696bc760e39c81d058daa6f9005d"


const client = twilio(accountSid, authToken);

function sendWpp(dat1, dat2, prod) {
  try {
    client.messages.create({
      body: `Compra de: ${dat1}, mail: ${dat2}, productos: ${prod}`,
      from: 'whatsapp:+17753169623',       
      to: 'whatsapp:+543513057343'
    })
  } catch (error) {
    logger.error(error)
  }
}

function wppComprador(num){
    try {
        client.messages.create({
        body: 'Su pedido ha sido recibido, se encuentra en proceso',
        from: 'whatsapp:+17753169623',       
        to: `whatsapp:+${num}`
        })
    } catch (error) {
        logger.error(error)
    }
}

module.exports = { sendWpp, wppComprador }