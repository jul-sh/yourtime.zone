import React from 'react'
import styled from 'styled-components'
import LayoutGradient from '~/components/LayoutGradient'
import DisplayLocalTime from '~/components/DisplayLocalTime'
import DottedButton from '~/components/DottedButton'
import { formatTimezoneName } from '~/helpers/getUserTimezone'
import { parameterToTimestamp } from '~/helpers/timeParameter'
import { getLocalisedInformation } from '~/helpers/getLocalisedInformation'

const StyledDottedButton = styled(DottedButton)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`

const PageEvent = props => {
  const { name, encodedTime } = props.match.params
  const timestamp = parameterToTimestamp(encodedTime)
  const localTime = {
    name: formatTimezoneName(Intl.DateTimeFormat().resolvedOptions().timeZone),
    ...getLocalisedInformation(timestamp)
  }

  return (
    <LayoutGradient backgroundTime={timestamp}>
      <DisplayLocalTime localTime={localTime} name={name} />
      <StyledDottedButton to="/">About yourtime.zone</StyledDottedButton>
    </LayoutGradient>
  )
}

export default PageEvent
