import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uuid from 'uuid-random'
import { BREAKPOINTS } from '~/styles'

const Wrapper = styled('div')`
  margin-bottom: ${props => props.marginBotton || '10px'};
`

const StyledInput = styled('input')`
  font-family: 'customsans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  appearance: none;
  font-size: 16px;
  padding: 10px 14px;
  border-radius: 4px;
  height: auto;
  border: 1px solid #d6d6d6;
  background: #f8f7f7;
  color: #000;
  min-width: 250px;
  margin-bottom: ${props => (props.error ? '15px' : 0)};
  text-align: center;

  ${BREAKPOINTS.SMALL} {
    min-width: 140px;
  }

  &:hover {
    box-shadow: 0 0 0 0.2em hsla(0, 0%, 100%, 0.3);
  }

  &:focus {
    box-shadow: 0 0 0 0.14em hsla(230, 100%, 70%, 1),
      0 0 0 0.175em hsla(230, 100%, 75%, 1);
    outline: 0;
  }
`

const Error = styled('div')`
  color: rgb(255, 210, 220);
`

const TextInput = props => (
  <Wrapper marginBottom={props.marginBottom}>
    <StyledInput
      {...props}
      hasErrors={!!props.error}
      aria-invalid={!!props.error}
      aria-describedby={`${props.id}-error`}
      type="text"
    />
    <Error id={`${props.id}-error`}>
      <span aria-hidden>{!!props.error && '☝️ '}</span>
      {props.error}
    </Error>
  </Wrapper>
)

TextInput.defaultProps = {
  id: uuid()
}

TextInput.propTypes = {
  id: PropTypes.string
}

export default TextInput
