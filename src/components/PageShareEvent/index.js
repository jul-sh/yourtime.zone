import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import ResponsiveBr from 'react-responsivebr'
import LayoutCentered from '~/components/LayoutCentered'
import TextInput from '~/components/TextInput'
import Button from '~/components/Button'
import { parameterToTimestamp } from '~/helpers/timeParameter'

class PageShareEvent extends React.Component {
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
    const path = `/e/${encodedTime}${name ? '/' + name : ''}`
    const url = window.location.origin + path

    return (
      <LayoutCentered backgroundTime={parameterToTimestamp(encodedTime)}>
        <h1>{this.state.isCopied ? 'Copied!' : 'Nicely done.'}</h1>
        <p>
          Now, simply share the link below.
          <ResponsiveBr minWidth="500" />
          It will display <Link to={path}>the event</Link> in the local time of
          whoever visits it.
        </p>
        <TextInput onClick={this.handleInputClick} value={url} readOnly />
        <CopyToClipboard text={url} onCopy={this.onCopy}>
          <Button as="button" data-clipboard-target="#copy-input">
            Copy
          </Button>
        </CopyToClipboard>
      </LayoutCentered>
    )
  }
}

export default PageShareEvent
