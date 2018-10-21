import React from 'react'
import styled from 'styled-components'
import { DateTime } from 'luxon'
import numberToOrdinalString from 'ordinal'
import ResponsiveBr from 'react-responsivebr'
import { getUserTimezone, formatTimezoneName } from '~/helpers/getUserTimezone'

const differenceInDays = (timestamp1, timestamp2) =>
  DateTime.fromMillis(timestamp1)
    .diff(DateTime.fromMillis(timestamp2), 'days')
    .toObject().days

const getRelativeDate = (timestamp, now) => {
  const isToday = DateTime.local().hasSame(
    DateTime.fromMillis(timestamp),
    'day'
  )
  const isTomorrow = DateTime.local()
    .plus({ days: 1 })
    .hasSame(DateTime.fromMillis(timestamp), 'day')
  const isYesterday = DateTime.local()
    .minus({ days: 1 })
    .hasSame(DateTime.fromMillis(timestamp), 'day')
  const daysBetween = differenceInDays(timestamp, now)
  const formattedTime = DateTime.fromMillis(timestamp).toFormat('h:mm') // eg 9:41
  const dayOfWeek = DateTime.fromMillis(timestamp).toFormat('cccc') //
  const dayOfMonth = numberToOrdinalString(
    parseInt(DateTime.fromMillis(timestamp).toFormat('d'))
  ) // eg 1st
  const month = DateTime.fromMillis(timestamp).toFormat('LLLL') // eg Monday

  if (isToday) return `today at ${formattedTime}`
  if (isTomorrow) return `tomorrow at ${formattedTime}`
  if (isYesterday) return `yesterday at ${formattedTime}`

  if (daysBetween >= 2 && daysBetween <= 6) {
    return `${dayOfWeek} at ${formattedTime}`
  }

  if (daysBetween >= -200 && daysBetween <= 200) {
    return `${month} the ${dayOfMonth} at ${formattedTime}`
  }

  return `${month} the ${dayOfMonth} at ${formattedTime}`
}

const isInPast = timestamp => DateTime.local() > DateTime.fromMillis(timestamp)

const getVerb = timestamp => (isInPast(timestamp) ? 'took place' : 'starts')

const getPreposition = (timestamp, now) => {
  const daysBetween = differenceInDays(timestamp, now)

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

const TimeInWords = ({ timestamp, now }) => {
  const meridiem = DateTime.fromMillis(timestamp).toFormat('a') // eg AM

  return (
    <>
      {getRelativeDate(timestamp, now)}
      <AmPm>{meridiem}</AmPm>
    </>
  )
}

const EventInWords = ({ name = 'the event', timestamp }) => {
  const now = Date.now()
  const userTimezone = formatTimezoneName(getUserTimezone())

  return (
    <>
      {`In your time zone (${userTimezone})`},<ResponsiveBr minWidth="800" />
      {`${name} ${getVerb(timestamp)} ${getPreposition(timestamp, now)}`}
      <h1>
        <TimeInWords timestamp={timestamp} now={now} />
      </h1>
    </>
  )
}

export default EventInWords
