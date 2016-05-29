require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);
//
const Tamagochi = require('./Tamagochi/Tamagochi');
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;
// Setup polling way
const bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/status/, function (msg, match) {
    const fromId = msg.from.id;

    Tamagochi.getStatus(fromId)
        .then((message) => {
            bot.sendMessage(fromId, message);
        });
});


bot.onText(/\/create (.+)/, function (msg, match) {
    const fromId = msg.from.id;
    const name = match[1];

    Tamagochi.createNew(name, fromId)
        .then((message) => {
            bot.sendMessage(fromId, message);
        });
});

//Matches /echo [whatever]
bot.onText(/\/hello/, function (msg, match) {
    const fromId = msg.from.id;

    bot.sendMessage(fromId, 'World!');
});

process.on('unhandledRejection', (reason, p) => {
    process.exit(1);
});