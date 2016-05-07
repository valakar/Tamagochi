const TelegramBot = require('node-telegram-bot-api');

var token = '206566257:AAEoWisqITvT1BH1LaaXZ5inODAvs52om5w';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/test/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, 'pohs');
});

