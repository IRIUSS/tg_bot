function get_days(data) {
    let all_days = {
        "one": { "mass": ["830","1000"], "data": "10 минут" },
        "two": { "mass": ["1010","1140"], "data": "20 минут" },
        "three": { "mass": ["1200","1330"], "data": "30 минут" },
        "four": { "mass": ["1400","1530"], "data": "10 минут" },
        "five": { "mass": ["1540","1710"], "data": "5 минут" },
        "six": { "mass": ["1715","1845"], "data": "-" }
    }
    let thurs_day = {
        "one": { "mass": ["830","1000"], "data": "10 минут" },
        "two": { "mass": ["1010","1140"], "data": "20 минут" },
        "three": { "mass": ["1200","1330"], "data": "10 минут" },
        "chekr": { "mass": ["1340","1410"], "data": "10 минут" },
        "four": { "mass": ["1420","1550"], "data": "10 минут" },
        "five": { "mass": ["1600","1730"], "data": "5 минут" },
        "six": { "mass": ["1735","1905"], "data": "-" }
    }
    if (data == 'ad') {
        return all_days
    }
    if (data == 'td') {
        return thurs_day
    }
}
function get_day() {
    let haus
    let day = new Date()
    day = day.getDay()

    if (day == 0) { haus = 'Воскресенье' }
    if (day == 1) { haus = 'Понедельник' }
    if (day == 2) { haus = 'Вторник' }
    if (day == 3) { haus = 'Среда' }
    if (day == 4) { haus = 'Четверг' }
    if (day == 5) { haus = 'Пятница' }
    if (day == 6) { haus = 'Суббота' }

    return haus
}

module.exports = { get_days, get_day }