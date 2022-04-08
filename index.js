import { Telegraf, Markup } from 'telegraf';
import sqlite3 from 'sqlite3';
const bot = new Telegraf('token');

var db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        return console.log(err.message);
    }
});
async function getdata(sql, row) {
    return await new Promise((calback) => {
        try {
            db.all(sql, (error, row) => {
                if (error) throw error
                return calback(row)
            })
        } catch (e) {
            return calback('Ошибка запроса! sql: ' + sql + '\n>>>>' + e)
        }
    })
}
db.run('CREATE TABLE IF NOT EXISTS users(ids)');
let data_mass = [];

setInterval(async function () {
    let hours = (new Date()).getHours().toString().padStart(2, '0')
    let minutes = (new Date()).getMinutes().toString().padStart(2, '0')
    let dinner_time = `${hours}:${minutes}`
    if (dinner_time == '12:30') {
        let user = await getdata('SELECT * FROM users')
        for (let i = 0; i < user.length; i++) {
            bot.telegram.sendMessage(user[i].ids, 'ЧИЧАС АБЕД!')
        }
    }
}, 6000);


const start_text = 'Прив всем я крутой бот для показывания обеда в корпорации зла'
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
    let hours = (new Date()).getHours().toString().padStart(2, '0')
    let minutes = (new Date()).getMinutes().toString().padStart(2, '0')
    let dinner_time = `${hours}:${minutes}`

    if (dinner_time == '12:30') {
        ctx.reply('ЧИЧАС АБЕД!')
    } else {
        ctx.reply('Чичас не обед, босс недоволен тем чем вы занимаетесь в рабочее/нерабочее время!')
    }
})
bot.hears('🛒 Купить дазвееб', async (ctx) => {
    let resp = await getdata('SELECT * FROM users')
    for (let i = 0; i < resp.length; i++) {
        data_mass.push(resp[i].ids)
    }

    bot.telegram.sendMessage(ctx.message.chat.id, `Привет: ${ctx.message.from.first_name}\nТвой id: ${ctx.message.from.id}\nТеперь ты подписан на рассылку сообщений о обеде!`)
    data_mass = data_mass.filter((item, index) => {
        return data_mass.indexOf(item) === index
    });

    if (data_mass.indexOf(ctx.message.chat.id) == -1) {
        db.run(`INSERT INTO users(ids)VALUES(${ctx.message.chat.id})`)
    } else { }
    data_mass.push(ctx.message.chat.id)
})
bot.hears('Время сейчас', (ctx) => {
    let hours = (new Date()).getHours().toString().padStart(2, '0')
    let minutes = (new Date()).getMinutes().toString().padStart(2, '0')

    ctx.reply(hours + ':' + minutes)
})
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
