import React from 'react'
import ResponsiveBr from 'react-responsivebr'
import { setBackgroundAccordingToTime } from '~/helperfunctions/setBackground'
import encodedTimeToLocalTime from '~/helperfunctions/encodedTimeToLocalTime'

class ParseeventBase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventName: '',
      eventTime: {}
    }
  }

  componentWillMount() {
    //if there is a name specified, use it.
    if (this.props.match.params.name) {
      this.setState({ eventName: '"' + this.props.match.params.name + '"' })
    } else {
      this.setState({ eventName: 'the event' })
    }

    //convert event into local time
    const event = encodedTimeToLocalTime(this.props.match.params.time)
    this.setState({ eventTime: event })
    setBackgroundAccordingToTime(event.inLocalTime)
  }

  render() {
    return (
      <span>
        In your timezone ({this.state.eventTime.userTimeZone}),<ResponsiveBr maxWidth="800" />
        {this.state.eventName} {this.state.eventTime.verb}
        {this.state.eventTime.preposition}
        <br />
        <h1 id="localtime">{this.state.eventTime.inHumanLanguage}</h1>
      </span>
    )
  }
}

export default ParseeventBase
