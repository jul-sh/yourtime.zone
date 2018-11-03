import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import ResponsiveBr from 'react-responsivebr'
import LayoutGradient from '~/components/LayoutGradient'
import TextInput from '~/components/TextInput'
import Button from '~/components/Button'
import { parameterToTimestamp } from '~/helpers/timeParameter'

const PageShareEvent = props => {
  const [isCopied, setIsCopied] = useState(false)
  const { encodedTime, name } = props.match.params
  const path = `/e/${encodedTime}${name ? '/' + name : ''}`
  const url = window.location.origin + path

  return (
    <LayoutGradient backgroundTime={parameterToTimestamp(encodedTime)}>
      <h1>{isCopied ? 'Copied!' : 'Nicely done.'}</h1>
      <p>
        Now, simply share the link below.
        <ResponsiveBr minWidth="500" />
        It will display <Link to={path}>the event</Link> in the local time of
        whoever visits it.
      </p>
      <TextInput
        onClick={event => {
          event.target.select()
          event.preventDefault()
        }}
        value={url}
        readOnly
      />
      <CopyToClipboard text={url} onCopy={() => setIsCopied('true')}>
        <Button as="button" data-clipboard-target="#copy-input">
          Copy
        </Button>
      </CopyToClipboard>
    </LayoutGradient>
  )
}

export default PageShareEvent
