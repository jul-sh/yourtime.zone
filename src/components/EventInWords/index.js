import React from 'react'
import styled from 'react-emotion'
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'
import format from 'date-fns/format'
import isToday from 'date-fns/is_today'
import isTomorrow from 'date-fns/is_tomorrow'
import isYesterday from 'date-fns/is_yesterday'
import isBefore from 'date-fns/is_before'
import ResponsiveBr from 'react-responsivebr'
import { getUserTimezone, formatTimezoneName } from '~/helpers/getUserTimezone'

const getRelativeDate = (timestamp, now) => {
  const daysBetween = differenceInCalendarDays(timestamp, now)

  if (isToday(timestamp)) return `today at ${format(timestamp, 'h:mm')}`
  if (isTomorrow(timestamp)) return `tomorrow at ${format(timestamp, 'h:mm')}`
  if (isYesterday(timestamp)) return `yesterday at ${format(timestamp, 'h:mm')}`
  if (2 <= daysBetween && daysBetween <= 6)
    return `${format(timestamp, 'dddd')} at ${format(timestamp, 'h:mm')}`
  if (-200 <= daysBetween && daysBetween <= 200)
    return `${format(timestamp, 'MMMM')} the ${format(
      timestamp,
      'Do'
    )} at ${format(timestamp, 'h:mm')}`

  return `${format(timestamp, 'MMMM')} the ${format(
    timestamp,
    'Do YYYY'
  )} at ${format(timestamp, 'h:mm')}`
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

const AmPm = styled('span')`
  text-transform: uppercase;
  font-size: 75%;

  :before {
    content: ' ';
  }
`

const TimeInWords = ({ timestamp, now }) => (
  <>
    {getRelativeDate(timestamp, now)}
    <AmPm>{format(timestamp, 'a')}</AmPm>
  </>
)

const EventInWords = ({ name = 'the event', timestamp }) => {
  const now = new Date()
  const userTimezone = formatTimezoneName(getUserTimezone())

  return (
    <>
      {`In your time zone (${userTimezone})`},<ResponsiveBr maxWidth="800" />
      {`${name} ${getVerb(timestamp, now)} ${getPreposition(timestamp, now)}`}
      <h1 id="localtime">
        <TimeInWords timestamp={timestamp} now={now} />
      </h1>
    </>
  )
}

export default EventInWords
