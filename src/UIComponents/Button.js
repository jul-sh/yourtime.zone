import styled from "react-emotion";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

const Button = styled(a)`
  display: inline-block;
  border: none;
  color: #000;
  border-radius: 5px 5px 5px 5px;
  width: auto;
  height: auto;
  font-size: 18px;
  padding: 14px 42px;
  background: #ffffff;
  transition: all 0.5s;
  font-family: "customsans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  text-decoration: none;
`;

export default Button;
