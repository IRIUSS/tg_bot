const { Telegraf, Markup } = require('telegraf')
const { get_days, get_day } = require('./learning.js')
const token = process.env.BOT_TOKEN = '2141359848:AAGNDrmsNvvo5rpH2DbAWGuXRoT1udXL6ec'
const bot = new Telegraf(token)

let start_text = 'Шумански сосал...'
function time(t) {
    let time = new Date()
    if (t == 't') {
        time = time.getHours() + ':' + time.getMinutes()
        return time
    } else {
        time = time.getHours() + '' + time.getMinutes()
        return time
    }
}

bot.start(async (ctx) => {
    return await ctx.reply(start_text, Markup
        .keyboard([
            ['📢 Когда звонок'],
            ['🛒 Магазин']
        ])
        .resize()
    )
})

/*
let test = JSON.parse(JSON.stringify(get_days('ad')))
tesz = test.one.mass[0]
mins = test.one.mass[1]
let old_date = new Date(0, 0, 0, tesz, mins, 0, 0)
ctx.reply(old.date.toString())
*/


bot.hears('📢 Когда звонок', (ctx) => {

    ctx.reply('Времени сейчас: ' + time('t') + '\nСегодня: ' + get_day() + '\n')

    if (830 > time() > 1000) {
        par1 = 1000 - time()
        ctx.reply('Шуманскi ' + par1)
    } else if (1010 > time() > 1140) {
        par2 = 1140 - time()
        ctx.reply('Шуманскi ' + par2)
    } else if (1200 > time() > 1330) {
        par3 = 1330 - time()
        ctx.reply('Шуманскi ' + par3)
    } else if (1400 > time() > 1530) {
        par4 = 1530 - time()
        ctx.reply('Шyманскаму прочистили жопу' + par4)
    } else if (1540 > time() > 1710) {
        par5 = 1710 - time()
        ctx.reply('Паша геи' + par5)
    } else if (1715 > time() > 1845) {
        par6 = 1845 - time()
        console.log(par6)
        ctx.reply('Алексей горбунов педик' + par6)
    }

    let test = JSON.parse(JSON.stringify(get_days('ad')))
    tes = test.one.mass[0]
    mins = test.one.mass[1]

    // ХЗ где использовать но скоро понадобится при выборе разделения дня
    if (get_day() == 'Четверг') {
        json_day = JSON.parse(JSON.stringify(get_days('td')))
        json_day = json_day.one.mass[0]
    } else {
        json_day = JSON.parse(JSON.stringify(get_days('ad')))
        json_day = json_day.one.mass[0]
    }
})

bot.command('quit', (ctx) => {
    // Explicit usage
    // ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)
    // Using context shortcut
    // ctx.reply(`Hello ${ctx.state.role}`)
    ctx.telegram.leaveChat(ctx.message.chat.id)
    // Using context shortcut
    ctx.leaveChat()
})

bot.use(Telegraf.log())
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))