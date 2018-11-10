import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BREAKPOINTS } from '~/styles'

export default styled(Link)`
  font-family: 'customsans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition: all 0.5s;
  display: inline-block;
  text-decoration: none;
  font-size: 16px;
  padding: 6px 12px;
  color: #fff;
  background: transparent;
  border: 2px dotted #ffffff;
  border-radius: 5px 5px 5px 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    opacity: 1;
    border: 2px dotted #ffffff;
  }

  &:focus {
    box-shadow: 0 0 0 0.14em hsla(230, 100%, 70%, 1),
      0 0 0 0.175em hsla(230, 100%, 75%, 1);
    outline: 0;
  }

  ${BREAKPOINTS.MEDIUM} {
    padding: 5px 11px;
  }

  ${BREAKPOINTS.TINY} {
    padding: 8px 20px;
  }
`
