import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'
import format from 'date-fns/format'
import isToday from 'date-fns/is_today'
import isTomorrow from 'date-fns/is_tomorrow'
import isYesterday from 'date-fns/is_yesterday'
import isBefore from 'date-fns/is_before'

const getDateInWords = (timestamp, now) => {
  const daysBetween = differenceInCalendarDays(timestamp, now)
  console.log(daysBetween)

  if (isToday(timestamp)) return `today at ${format(timestamp, 'h:mm A')}`
  if (isTomorrow(timestamp)) return `tomorrow at ${format(timestamp, 'h:mm A')}`
  if (isYesterday(timestamp))
    return `yesterday at ${format(timestamp, 'h:mm A')}`
  if (2 <= daysBetween && daysBetween <= 6)
    return `${format(timestamp, 'dddd')} at ${format(timestamp, 'h:mm A')}`
  if (-200 <= daysBetween && daysBetween <= 200)
    return `${format(timestamp, 'MMMM')} the ${format(
      timestamp,
      'Do'
    )} at ${format(timestamp, 'h:mm A')}`

  return `${format(timestamp, 'MMMM')} the ${format(
    timestamp,
    'Do YYYY'
  )} at ${format(timestamp, 'h:mm A')}`
}

const getVerb = (timestamp, now) =>
  isBefore(timestamp, now) ? 'took place' : 'starts'

const getPreposition = (timestamp, now) => {
  const daysBetween = differenceInCalendarDays(timestamp, now)

  if (daysBetween < -1 || daysBetween > 6) {
    return ' on'
  }

  return ''
}

const timestampToWords = timestamp => {
  const now = new Date()

  return {
    inWords: getDateInWords(timestamp, now),
    verb: getVerb(timestamp, now),
    preposition: getPreposition(timestamp, now)
  }
}

export default timestampToWords
