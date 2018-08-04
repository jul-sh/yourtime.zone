import React from 'react'
import * as Clipboard from 'clipboard'
import { Link } from 'react-router-dom'
import { setBackgroundAccordingToTime } from '~/helperfunctions/setBackground'
import encodedTimeToLocalTime from '~/helperfunctions/encodedTimeToLocalTime'

class ShareEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Nicely done.',
      eventName: this.props.match.params.name,
      eventTime: this.props.match.params.time
    }
  }

  componentWillMount() {
    //convert event into local time & set background accordingly
    const event = encodedTimeToLocalTime(this.props.match.params.time)
    console.log(event)
    setBackgroundAccordingToTime(event.inLocalTime)
  }

  componentDidMount() {
    var clipboard = new Clipboard('#copy-button')
    clipboard.on('success', e => {
      this.setState({ name: 'Copied!' })
      e.clearSelection()
    })
    clipboard.on('error', e => {
      this.setState({ name: 'Please copy manually.' })
    })
  }

  copyUrlToClipboard(event) {
    event.target.select()
    event.preventDefault()
  }

  generatePath = () => {
    if (!this.state.eventTime) {
      return 'Error, please create another event.'
    }
    if (!this.state.eventName) {
      const path = '/p/' + this.state.eventTime
      return path
    }
    const path = '/p/' + this.state.eventTime + '/' + this.state.eventName
    return path
  }

  generateURL = () => {
    if (!this.state.eventTime) {
      return 'Error, please create another event.'
    }
    var path = this.generatePath()
    const CurrentDomain = window.location.origin
    var EventURL = CurrentDomain + path
    return EventURL
  }

  render() {
    return (
      <div>
        <h1 style={{ marginTop: '0' }}>{this.state.name}</h1>
        <p>
          Now, simply share the link below.<br className="optionalbr" />It will
          display <Link to={this.generatePath()}>the event</Link> in the local
          time of whoever visits it.
        </p>
        <form>
          <div className="input-group">
            <input
              onClick={this.copyUrlToClipboard}
              type="text"
              className="form-control shareurl"
              defaultValue={this.generateURL()}
              readOnly
              id="copy-input"
            />
            <span className="input-group-btn">
              <button
                className="btn btn-default"
                type="button"
                id="copy-button"
                data-clipboard-target="#copy-input"
                name="Copy to Clipboard"
              >
                Copy
              </button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default ShareEvent
