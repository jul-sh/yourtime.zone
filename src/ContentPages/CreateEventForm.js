import React from 'react'
import {
  setBackgroundAccordingToCurrentVisitorTime,
  setBackgroundAccordingToTime
} from '~/helperfunctions/setBackground'
import NameUserTimezone from '~/helperfunctions/nameUserTimezone'
import { EncodeEvent } from '~/helperfunctions/encodeEvent'
import DateTimePicker from '~/UIComponents/DateTimePicker'
import { Redirect } from 'react-router-dom'
/*  To do: Clean up the implementation of the time + date picker, as it is quite messy */

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToSharePage: false,
      redirectURL: '/share',
      userTimeZone: NameUserTimezone(),
      dateTime: '',
      eventName: ''
    }
  }

  componentWillMount() {
    setBackgroundAccordingToCurrentVisitorTime()
  }

  handleSubmit = event => {
    var EventTime = this.state.dateTime
    var EventName = this.state.eventName
    //convert to unix seconds time
    var EncodedEventTime = EncodeEvent(EventTime)
    this.setState({ redirectToSharePage: true })
    this.setState({
      redirectURL: '/share/' + EncodedEventTime + '/' + EventName
    })
    event.preventDefault()
  }

  callbackDateTimePicker = dateTime => {
    this.setState({ dateTime: dateTime })
    setBackgroundAccordingToTime(dateTime)
  }

  render() {
    if (this.state.redirectToSharePage) {
      return <Redirect to={this.state.redirectURL} push />
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>When is the event?</h2>
        <p>
          In your local time zone ({this.state.userTimeZone}
          ).{' '}
        </p>
        <DateTimePicker callbackFromParent={this.callbackDateTimePicker} />
        <div style={{ marginTop: 45 }}>
          <h2>What's the name of the event?</h2>
          <input
            type="text"
            value={this.state.eventName}
            onChange={event => {
              this.setState({ eventName: event.target.value })
            }}
            placeholder="Juliette's Webinar"
            id="Eventname"
            name="nameofevent"
          />
        </div>
        <div className="submitbuttondiv" style={{ marginTop: 15 }}>
          <input
            type="submit"
            className="btn-class bigbutton"
            defaultValue="Create Event"
          />
        </div>
      </form>
    )
  }
}
export default CreateEventForm
