import React from 'react'
import styled from 'react-emotion'

const CenterChildren = styled('div')`
  display: flex;
  flex-grow: 1;
  min-width: 100%;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled('div')`
  text-align: center;
  max-width: 1000px;
  padding: 30px;
`

const LayoutCentered = props => (
  <CenterChildren>
    <ContentWrapper>{props.children}</ContentWrapper>
  </CenterChildren>
)

export default LayoutCentered
