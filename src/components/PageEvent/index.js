import React from 'react'
import LayoutCentered from '~/components/LayoutCentered'
import EventInWords from '~/components/EventInWords'
import FooterButton from '~/components/FooterButton'
import { parameterToTimestamp } from '~/helpers/timeParameter'

const PageEvent = props => {
  const { name, encodedTime } = props.match.params
  const timestamp = parameterToTimestamp(encodedTime)

  return (
    <LayoutCentered backgroundTime={timestamp}>
      <EventInWords timestamp={timestamp} name={name} />
      <div id='bottomarea'>
        <FooterButton />
      </div>
    </LayoutCentered>
  )
}

export default PageEvent
