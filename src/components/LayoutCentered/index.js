import React from 'react'
import styled from 'react-emotion'
import parse from 'date-fns/parse'
import { HOUR_COLOR_COMBINATION } from '~/styles'

const getGradientByTime = time => {
  const hour = parse(time).getHours()

  return `linear-gradient(
    to bottom,
    ${HOUR_COLOR_COMBINATION[hour][0]} 0%,
    ${HOUR_COLOR_COMBINATION[hour][1]} 100%
  )`
}

const CenterChildren = styled('div')`
  display: flex;
  flex-grow: 1;
  min-width: 100%;
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

const LayoutCentered = props => (
  <CenterChildren backgroundTime={props.backgroundTime}>
    <ContentWrapper>{props.children}</ContentWrapper>
  </CenterChildren>
)

export default LayoutCentered
