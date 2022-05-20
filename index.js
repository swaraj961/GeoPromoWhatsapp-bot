const express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
// port 
var port = process.env.PORT || 3000;


const accountSid = "AC46c421f2c46cb916406fc03302b4f507";
const authToken = "7907e0f6743f5ab63f4e937d97f2c818";
const client = require('twilio')(accountSid, authToken);
function sendMessage(url, body) {
  client.messages
    .create({
      mediaUrl: [url],
      from: 'whatsapp:+14155238886',
      body: body,
      to: 'whatsapp:+919818514324',

    })
    .then(message => console.log("Message sent" + message.sid));
}
app.post('/', (req, res) => {
  var number = req.body.number || 9818514324
  var num = 'whatsapp:+91' + number;
  console.log(number + "and response is" + num);
  client.messages
    .create({
      from: 'whatsapp:+14155238886',
      body: 'Hello there! You are near Dominos.Now Get 10% OFF on your next 3 orders',
      to: 'whatsapp:+919818514324'
    })
    .then(message => console.log(message.sid));
})
app.get('/', (req, res) => {
  var id = req.query.id;
  res.send("This is homepage and id is " + id);
  switch (id) {
    case "498":
      sendMessage("https://staticbodyshop.gumlet.io/pub/media/weltpixel/owlcarouselslider/images/1/_/1_1__2.jpg","Get 30% off on The Body Shop orders, Head to your nearest store today!! ")
      break;
    case "500":
      sendMessage("https://res.cloudinary.com/dp5naxeap/image/upload/v1612359544/index_xicaqd.jpg", "Hello there! You are near Dominos.Now Get 10% OFF on your next 3 orders");
      break;
    case "502":
      sendMessage("https://res.cloudinary.com/dp5naxeap/image/upload/v1612590969/croma_cjcjgg.jpg", "Hi! Get upto 48% off on buying new mobile phone");
      break;
    case "503":
      sendMessage("https://pantaloons.imgix.net/img/app/shopmedia/production/8/8-30-7268.jpg", "Upto 50% off on Pantaloons Pay Day Sale!!!");
      break;
    case "507":
      sendMessage("https://res.cloudinary.com/dp5naxeap/image/upload/v1612591559/burger_fulk9h.jpg", "Now save upto 37%.Buy 2 burgers at ₹99");
      break;
    case "510":
      sendMessage("https://res.cloudinary.com/dp5naxeap/image/upload/v1612591711/easyday_eo2hi7.jpg", "Save upto 60% on Grocery Shopping.Visit today.");
      break;

    default:
      sendMessage("https://res.cloudinary.com/dp5naxeap/image/upload/v1612359544/index_xicaqd.jpg", "Save upto 40% on Dominos Classic Pizzas. Order today!! ");
      break;
  }




})
app.listen(port, () => {
  console.log("Server started successfully");
})