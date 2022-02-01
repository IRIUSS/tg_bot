function get_days(data) {
    let all_days = {
        "one": { "mass": ["08:30","10:00"], "data": "10 минут" },
        "two": { "mass": ["10:10","11:40"], "data": "20 минут" },
        "three": { "mass": ["1200","13:30"], "data": "30 минут" },
        "four": { "mass": ["14:00","15:30"], "data": "10 минут" },
        "five": { "mass": ["15:40","17:10"], "data": "5 минут" },
        "six": { "mass": ["17:15","18:45"], "data": "-" }
    }
    let thurs_day = {
        "one": { "mass": ["08:30","10:00"], "data": "10 минут" },
        "two": { "mass": ["10:10","11:40"], "data": "20 минут" },
        "three": { "mass": ["12:00","13:30"], "data": "10 минут" },
        "chekr": { "mass": ["13:40","14:10"], "data": "10 минут" },
        "four": { "mass": ["14:20","15:50"], "data": "10 минут" },
        "five": { "mass": ["16:00","17:30"], "data": "5 минут" },
        "six": { "mass": ["17:35","19:05"], "data": "-" }
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