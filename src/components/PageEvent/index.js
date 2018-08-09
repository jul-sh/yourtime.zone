import React from 'react'
import ResponsiveBr from 'react-responsivebr'
import LayoutCentered from '~/components/LayoutCentered'
import FooterButton from '~/components/FooterButton'
import { getUserTimezone, formatTimezoneName } from '~/helpers/getUserTimezone'

import { parameterToTimestamp } from '~/helpers/timeParameter'
import timestampToWords from '~/helpers/timestampToWords'

const PageEvent = props => {
  const userTimezone = getUserTimezone()
  const { name, encodedTime } = props.match.params
  const timestamp = parameterToTimestamp(encodedTime)
  const eventTime = timestampToWords(timestamp)
  const eventName = name ? `"${name}"` : 'the event'

  return (
    <LayoutCentered backgroundTime={timestamp}>
      In your time zone ({formatTimezoneName(userTimezone)}
      ),
      <ResponsiveBr maxWidth="800" />
      {`${eventName} ${eventTime.verb} ${eventTime.preposition}`}
      <br />
      <h1 id="localtime">{eventTime.inWords}</h1>
      <div id="bottomarea">
        <FooterButton />
      </div>
    </LayoutCentered>
  )
}

export default PageEvent
