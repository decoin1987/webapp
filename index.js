import TelegramBot from 'node-telegram-bot-api'


const token = '7713412576:AAHVQCyDt6YdqlD-kfY8jxGTA8ecP2jErgU'

const bot = new TelegramBot(token, {polling: true})


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.chat.username;
    console.log(msg)

    // send a message to the chat acknowledging receipt of their message
    if(msg.text === '/start') {
        await bot.sendMessage(chatId, `KEK`, {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'goto', web_app: {url:'https://webapptgbottest.netlify.app/'}}],
                ],
            }
        });
        await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
            reply_markup: {
                keyboard: [
                    [{text: 'Сделать заказ', web_app:  {url:'https://webapptgbottest.netlify.app/'}}],
                ]
            }
        })
    }
    if(msg?.web_app_data?.data) {
        // const data = msg?.web_app_data?.data
        console.dir(msg.web_app_data)
        await bot.sendMessage(chatId, msg.web_app_data.data)
    }
});