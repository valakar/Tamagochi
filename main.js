require('dotenv').config();
const Tamagochi = require('./tamagochiHandler/Tamagochi');
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;
console.log(token);
// Setup polling way
const bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/getStatus/, function (msg, match) {
    const fromId = msg.from.id;
    const tamagochi = new Tamagochi(fromId);
    const response = JSON.stringify(tamagochi.getStatus());
    bot.sendMessage(fromId, response);
});

