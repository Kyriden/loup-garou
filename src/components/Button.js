import styled from "styled-components";


const Button = styled.button`
  color: white;
  text-decoration: none;
  font-size: 15px;
  transition: all 1s;
  margin-left: 20px;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${props => props.theme.normal};
  &:hover {
    color: white !important;
    background-color: ${props => props.theme.hover};
  }
`

Button.defaultProps = {
  theme: {
    normal: "#850606",
    hover: "#FF0000"
  }
}

export default Button;