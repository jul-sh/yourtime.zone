import React from 'react'
import ResponsiveBr from 'react-responsivebr'
import styled from 'styled-components'
import Button from '~/components/Button'
import LayoutCentered from '~/components/LayoutCentered'

const Description = styled('p')`
  text-align: center;
  margin: 0 auto;
  max-width: 40ch;
  margin-bottom: 30px;
`

const PageAbout = props => {
  return (
    <LayoutCentered backgroundTime={new Date()}>
      <h1>
        Time zones are hard.
        <ResponsiveBr minWidth="500" />
        I'll take care of them.
      </h1>
      <Description>
        yourtime.zone translates the time of an event into the visitor's local
        time. Great for webinars and live-streams.{' '}
      </Description>
      <Button to="/new">Create an event</Button>
    </LayoutCentered>
  )
}

export default PageAbout
