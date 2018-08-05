import React from 'react'
import ResponsiveBr from 'react-responsivebr'
import {
  getUserTimezone,
  getTimezoneName
} from '~/helperfunctions/getUserTimezone'
import setBackgroundByTimestamp from '~/helperfunctions/setBackgroundByTimestamp'
import { parameterToTimestamp } from '~/helperfunctions/timeParameter'
import timestampToWords from '~/helperfunctions/timestampToWords'

const ParseeventBase = props => {
  const userTimezone = getUserTimezone()
  const { name, encodedTime } = props.match.params
  const timestamp = parameterToTimestamp(encodedTime)
  const eventTime = timestampToWords(timestamp)
  const eventName = name ? `"${name}"` : 'the event'

  setBackgroundByTimestamp(timestamp)

  return (
    <>
      In your time zone ({getTimezoneName(userTimezone)}
      ),
      <ResponsiveBr maxWidth="800" />
      {`${eventName} ${eventTime.verb} ${eventTime.preposition}`}
      <br />
      <h1 id="localtime">{eventTime.inWords}</h1>
    </>
  )
}

export default ParseeventBase
