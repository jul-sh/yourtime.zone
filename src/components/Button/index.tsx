import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BREAKPOINTS } from '~/styles'

export default styled(Link)`
  font-family: 'customsans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(0, 0, 0);
  background: rgb(255, 255, 255);
  display: inline-block;
  border-radius: 5px 5px 5px 5px;
  font-size: 18px;
  padding: 14px 42px;
  text-decoration: none;
  will-change: box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 0.175em hsla(0, 0%, 100%, 0.4);
  }

  &:focus {
    box-shadow: 0 0 0 0.14em hsla(230, 100%, 70%, 1),
      0 0 0 0.175em hsla(230, 100%, 75%, 1);
    outline: 0;
  }

  ${BREAKPOINTS.TINY} {
    padding: 12px 35px;
  }
`
