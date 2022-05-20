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
      sendMessage("https://res.cloudinary.com/dkvd4ivht/image/upload/v1653050332/offers/Amazon-Clearence__dbopje.jpg"," Wow Clearance Sale is live ! - Clothing: Flat 70% off from a great selection at Clothing & Accessories Store ")
      break;
    case "500":
      sendMessage("https://res.cloudinary.com/dkvd4ivht/image/upload/v1653049970/offers/movie_zaoisq.jpg", "Hello there! Wanted to watch a movie? .Now Get 50% OFF upto ₹300 at bookmyshow.com ");
      break;
    case "502":
      sendMessage("https://res.cloudinary.com/dkvd4ivht/image/upload/v1653048044/offers/chroma_offer_gigwnf.png", "Hi! Get upto 70% off on buying new electronics on chroma");
      break;
    case "503":
      sendMessage("https://res.cloudinary.com/dkvd4ivht/image/upload/v1653046382/offers/Mcd_meals_offer_flqbzl.jpg","Hi! MCDonalds classic burger meal at flat ₹479 order now | Limited offer!");
      break;
    case "507":
      sendMessage("https://res.cloudinary.com/dkvd4ivht/image/upload/v1653049510/offers/freeburgerv_aw23jw.jpg","Hey! Free Burger for you and your friend refer now !");
      break;
    case "510":
      sendMessage("https://res.cloudinary.com/dkvd4ivht/image/upload/v1653047805/offers/NCR-Save-Big_cxaxcf.jpg","Yo Save upto 40% on Grocery Shopping + 10% extra cashback Visit today https://www.sparindia.com/.");
      break;

    default:
      sendMessage("https://res.cloudinary.com/dkvd4ivht/image/upload/v1653046915/offers/dominos_offer_aoeejg.jpg", "Save upto 40% on Dominos Classic Pizzas. Order today!! ");
      break;
  }




})
app.listen(port, () => {
  console.log("Server started successfully");
})