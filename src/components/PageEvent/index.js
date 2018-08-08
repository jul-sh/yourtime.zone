import React from 'react'
import ResponsiveBr from 'react-responsivebr'
import { getUserTimezone, formatTimezoneName } from '~/helpers/getUserTimezone'
import setBackgroundByTimestamp from '~/helpers/setBackgroundByTimestamp'
import { parameterToTimestamp } from '~/helpers/timeParameter'
import timestampToWords from '~/helpers/timestampToWords'

const PageEvent = props => {
  const userTimezone = getUserTimezone()
  const { name, encodedTime } = props.match.params
  const timestamp = parameterToTimestamp(encodedTime)
  const eventTime = timestampToWords(timestamp)
  const eventName = name ? `"${name}"` : 'the event'

  setBackgroundByTimestamp(timestamp)

  return (
    <>
      In your time zone ({formatTimezoneName(userTimezone)}
      ),
      <ResponsiveBr maxWidth="800" />
      {`${eventName} ${eventTime.verb} ${eventTime.preposition}`}
      <br />
      <h1 id="localtime">{eventTime.inWords}</h1>
    </>
  )
}

export default PageEvent
