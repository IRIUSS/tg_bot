const { Telegraf, Markup } = require('telegraf')
const { get_days, get_day } = require('./learning.js')
const { tokenn } = require('./token.js')
const token = process.env.BOT_TOKEN = tokenn()
const bot = new Telegraf(token)

let start_text = 'Шумански сосал...'
//function time() {
//async (ctx) => {

//    }
//}
bot.command('test', (ctx) => {
    let test = JSON.parse(JSON.stringify(get_days('ad')))
    tesz = test.one.mass[0]
    mins = test.one.mass[1]
    let old_date = new Date(0, 0, 0, tesz, mins, 0, 0)
    let new_date = new Date()
    ddata = new_date - old_date
    ctx.reply(ddata.toString())
    // Пока что возвращает нан
})

bot.start(async (ctx) => {
    return await ctx.reply(start_text, Markup
        .keyboard([
            ['📢 Когда звонок'],
            ['🛒 Магазин']
        ])
        .resize()
    )
})

bot.hears('📢 Когда звонок', (ctx) => {

    ctx.reply('Времени сейчас: ' + time('t') + '\nСегодня: ' + get_day() + '\n')

    if ("08:30" > time() > "10:00") {
        par1 = "10:00" - time()
        ctx.reply('Шуманскi ' + par1)
    } else if ("10:10" > time() > "11:40") {
        par2 = "11:40" - time()
        ctx.reply('Шуманскi ' + par2)
    } else if ("12:00" > time() > "13:30") {
        par3 = "13:30" - time()
        ctx.reply('Шуманскi ' + par3)
    } else if ("14:00" > time() > "15:30") {
        par4 = "15:30" - time()
        ctx.reply('Шyманскаму прочистили жопу' + par4)
    } else if ("15:40" > time() > "17:10") {
        par5 = "17:10" - time()
        ctx.reply('Паша геи' + par5)
    } else if ("17:15" > time() > "18:45") {
        par6 = "18:45" - time()
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
