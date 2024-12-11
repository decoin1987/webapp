import TelegramBot from 'node-telegram-bot-api'


const token = '7713412576:AAHVQCyDt6YdqlD-kfY8jxGTA8ecP2jErgU'

const bot = new TelegramBot(token, {polling: true})


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.chat.username;


    // send a message to the chat acknowledging receipt of their message
    await bot.sendMessage(chatId, `KEK`, {
        reply_markup: {
            inline_keyboard: [
                [{text: 'goto', web_app: {url:'https://cas.chat/'}}],
            ]
        }
    });
});