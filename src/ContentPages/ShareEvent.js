import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import ResponsiveBr from 'react-responsivebr'
import { parameterToTimestamp } from '~/helperfunctions/timeParameter'
import setBackgroundByTimestamp from '~/helperfunctions/setBackgroundByTimestamp'

class ShareEvent extends React.Component {
  state = {
    isCopied: false
  }

  onCopy = () => this.setState({ isCopied: true })

  handleInputClick(event) {
    event.target.select()
    event.preventDefault()
  }

  render() {
    const { encodedTime, name } = this.props.match.params
    const path = `/p/${encodedTime}${name ? '/' + name : ''}`
    const url = window.location.origin + path
    setBackgroundByTimestamp(parameterToTimestamp(encodedTime))

    return (
      <>
        <h1 style={{ marginTop: '0' }}>
          {this.state.isCopied ? 'Copied!' : 'Nicely done.'}
        </h1>
        <p>
          Now, simply share the link below.
          <ResponsiveBr minWidth="500" />
          It will display <Link to={path}>the event</Link> in the local time of
          whoever visits it.
        </p>
        <form>
          <div className="input-group">
            <input
              onClick={this.handleInputClick}
              type="text"
              className="form-control shareurl"
              value={url}
              readOnly
            />
            <span className="input-group-btn">
              <CopyToClipboard text={url} onCopy={this.onCopy}>
                <button
                  className="btn btn-default copy-button"
                  type="button"
                  data-clipboard-target="#copy-input"
                >
                  Copy
                </button>
              </CopyToClipboard>
            </span>
          </div>
        </form>
      </>
    )
  }
}

export default ShareEvent
