import React from 'react'
import * as Cookies from 'js-cookie'

class EmbedEventButton extends React.Component {
  state = {
    open: false
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    //check if visitor is also creator of this event
    var EventName = ''
    if (this.props.match.params.name) {
      EventName = '"' + this.props.match.params.name + '"'
    }

    var EventUnixMinutesB36 = ''
    if (this.props.match.params.time) {
      EventUnixMinutesB36 = this.props.match.params.time
    }
    var EventID = EventUnixMinutesB36 + EventName
    var creatorcookie = Cookies.get('creatorofevent')
    var CurrentHost = window.location.host
    var referrer = document.referrer

    //if the current path starts with share
    if (
      this.props.location.pathname.substring(0, 6) === '/share' ||
      creatorcookie === EventID ||
      referrer.indexOf(CurrentHost + '/share/') >= 0
    ) {
      return (
        <span>
          <a
            href="https://app.mailerlite.com/webforms/submit/q7k9r7"
            target="_blank"
            rel="noopener noreferrer"
            className="bottomareabutton btn-class"
            id="embedbutton"
          >
            Embed the event
          </a>
        </span>
      )
    }

    return (
      /*  Somehow making this <Link></Link> breaks React? To be investigated  */
      <a href="/" className="bottomareabutton btn-class">
        About yourtime.zone
      </a>
    )
  }
}

export default EmbedEventButton
