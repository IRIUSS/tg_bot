import { Telegraf, Markup } from 'telegraf';
const bot = new Telegraf('5094875865:AAE7Fq-f4u0C_ejpZ8zhyWOk2ujc8whEYO8');

const start_text = 'Прив всем я крутой бот для показывания обеда в корпорации зла ООО стальная компания'
bot.start(async (ctx) => {
    return await ctx.reply(start_text, Markup
        .keyboard([
            ['📢 Когда обед'],
            ['🛒 Купить дазвееб'],
            ['Время сейчас']
        ])
        .resize()
    )
})

bot.hears('📢 Когда обед', (ctx) => {
    let hours = (new Date()).getHours()
    let minutes = (new Date()).getMinutes()
    let dinner_time = hours + minutes

    if (dinner_time == 42) {
        ctx.reply('ЧИЧАС АБЕД!')
    } else {
        ctx.reply('Стальком не верит вас минус 100 социальный рейтинг и миска рис с обед')
    }
})
bot.hears('Время сейчас', (ctx) => {
    let hours = (new Date()).getHours().toString().padStart(2, '0')
    let minutes = (new Date()).getMinutes().toString().padStart(2, '0')

    ctx.reply(hours + ':' + minutes)
})
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))