import React from 'react'
import styled from 'styled-components'
import numberToOrdinalString from 'ordinal'
import ResponsiveBr from 'react-responsivebr'

const formatDate = localTime => {
  if (localTime.daysFromLocalNow === 0)
    return `today at ${localTime.formattedTime}`
  if (localTime.daysFromLocalNow === 1)
    return `tomorrow at ${localTime.formattedTime}`
  if (localTime.daysFromLocalNow === -1)
    return `yesterday at ${localTime.formattedTime}`

  if (localTime.daysFromLocalNow >= 2 && localTime.daysFromLocalNow <= 6) {
    return `${localTime.dayOfWeek} at ${localTime.formattedTime}`
  }

  if (localTime.daysFromLocalNow >= -200 && localTime.daysFromLocalNow <= 200) {
    return `${localTime.month} the ${numberToOrdinalString(
      parseInt(localTime.dayOfMonth)
    )} at ${localTime.formattedTime}`
  }

  return `The ${numberToOrdinalString(parseInt(localTime.dayOfMonth))} of ${
    localTime.month
  } ${localTime.year} at ${localTime.formattedTime}`
}

const AmPm = styled('span')`
  text-transform: uppercase;
  font-size: 75%;

  :before {
    content: ' ';
  }
`

const DisplayLocalTime = ({ name = 'the event', localTime }) => {
  const preposition =
    localTime.daysFromLocalNow < -1 || localTime.daysFromLocalNow > 6
      ? ' on'
      : ''

  return (
    <>
      {`In your time zone (${localTime.name})`},<ResponsiveBr minWidth="800" />
      {`${name} ${localTime.isInPast ? 'took place' : 'starts'} ${preposition}`}
      <h1>
        {formatDate(localTime)}
        <AmPm>{localTime.amOrPm}</AmPm>
      </h1>
    </>
  )
}

export default DisplayLocalTime
