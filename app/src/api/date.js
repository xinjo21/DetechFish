export function getTime() {
  const date = new Date()

  var hr = date.getHours()
  var mn = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
  var sec = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()

  var time

  if (hr > 12 || hr === 12) {
    hr = (hr !== 12 ? (hr - 12) : 12)
    time = (hr < 10 ? '0' : '') + hr + ':' + mn + ":" + sec + " PM"
  } else if (hr === 0 || hr < 12) {
    hr = (hr !== 0 ? hr : 12)
    time = hr + ':' + mn + ":" + sec + " AM"
  } /* else {
    time = (hr < 10 ? '0' : '') + hr + ':' + mn + ":" + sec + " AM"
  } */
  return time
}

export function getDate() {
  const date = new Date()

  var currentDay = date.getDay()
  var currentMonth = date.getMonth()
  var currentDate = date.getDate()
  var currentYear = date.getFullYear()

  var month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  var day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  var curDate = day[currentDay] + ", " + month[currentMonth] + " " + currentDate + ", " + currentYear

  return curDate
}