import moment from 'moment-mini'

const timestampToWords = timestamp => {
  const eventTime = moment(timestamp)
  const inWords = eventTime.calendar(null, {
    sameDay: '[today at] h:mm A',
    nextDay: '[tomorrow at] h:mm A',
    nextWeek: 'dddd [at] h:mm A',
    withinthenext200Days: 'MMMM Do [at] h:mm A',
    lastDay: '[yesterday at] h:mm A',
    lastWeek: '[last] dddd [at] h:mm A',
    withinthelast200Days: 'MMMM Do [at] h:mm A',
    sameElse: 'MMMM Do YYYY [at] h:mm A'
  })
  const now = moment()
  let verb = 'starts'
  if (moment(eventTime).isBefore(now)) {
    verb = 'took place'
  }
  let preposition = ''
  if (
    eventTime.diff(now, 'days', true) > 2 ||
    eventTime.diff(now, 'days', true) < -6
  ) {
    preposition = ' on'
  }
  return {
    inWords: inWords,
    verb: verb,
    preposition: preposition
  }
}

export default timestampToWords
