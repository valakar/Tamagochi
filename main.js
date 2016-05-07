require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

var token = process.env.TOKEN;
console.log(token);
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/^1/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, msg.from.id);
});

