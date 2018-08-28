import React from 'react'
import styled from 'react-emotion'
import { BREAKPOINTS } from '~/styles'

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
  margin-bottom: 10px;
  text-align: center;

  ${BREAKPOINTS.SMALL} {
    min-width: 140px;
  }
`

const TextInput = props => <StyledInput {...props} type="text" />

export default TextInput
