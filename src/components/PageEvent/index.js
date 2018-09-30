import React from 'react'
import styled from 'styled-components'
import LayoutGradient from '~/components/LayoutGradient'
import EventInWords from '~/components/EventInWords'
import DottedButton from '~/components/DottedButton'
import { parameterToTimestamp } from '~/helpers/timeParameter'

const StyledDottedButton = styled(DottedButton)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`

const PageEvent = props => {
  const { name, encodedTime } = props.match.params
  const timestamp = parameterToTimestamp(encodedTime)

  return (
    <LayoutGradient backgroundTime={timestamp}>
      <EventInWords timestamp={timestamp} name={name} />
      <StyledDottedButton to="/">About yourtime.zone</StyledDottedButton>
    </LayoutGradient>
  )
}

export default PageEvent
