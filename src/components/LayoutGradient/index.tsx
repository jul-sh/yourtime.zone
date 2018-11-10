import React from 'react'
import styled from 'styled-components'
import { DateTime } from 'luxon'
import { HOUR_COLOR_COMBINATION } from '~/styles'

const getGradientByTime = (timestamp: number) => {
  const hour = DateTime.fromMillis(timestamp).hour

  return `linear-gradient(
    to bottom,
    ${HOUR_COLOR_COMBINATION[hour][0]} 40%,
    ${HOUR_COLOR_COMBINATION[hour][1]} 100%
  )`
}

const CenterChildren = styled('div')`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: ${({ backgroundTime }) =>
    backgroundTime ? getGradientByTime(backgroundTime) : 'transparent'};
`

const ContentWrapper = styled('div')`
  text-align: center;
  max-width: 1000px;
  padding: 30px;
`

const LayoutGradient = props => (
  <CenterChildren
    className={props.className}
    backgroundTime={props.backgroundTime}
  >
    <ContentWrapper>{props.children}</ContentWrapper>
  </CenterChildren>
)

export default LayoutGradient
