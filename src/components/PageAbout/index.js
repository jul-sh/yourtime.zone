import React from 'react'
import { Link } from 'react-router-dom'
import ResponsiveBr from 'react-responsivebr'
import LayoutCentered from '~/components/LayoutCentered'

const PageAbout = props => {
  return (
    <LayoutCentered backgroundTime={new Date()}>
      <h1 className="greeting">
        Time Zones are hard.
        <ResponsiveBr minWidth="500" />
        I'll take care of them for you.
      </h1>
      <div className="bodytext">
        <span>
          yourtime.zone translates the time of an event into the visitor's local
          time. Great for webinars and live-streams.{' '}
        </span>
      </div>
      <Link to="/new" className="btn-class bigbutton">
        Create an event
      </Link>
    </LayoutCentered>
  )
}

export default PageAbout
