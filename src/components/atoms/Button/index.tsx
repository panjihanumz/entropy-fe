import styled from 'styled-components';
import COLORS from 'utils/colors';

const Button = styled.button`
  box-sizing: border-box;
  padding: 0.5em 2em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: 0px;
  border-radius: 10px;
  font-weight: 600;
  background: ${COLORS.primary};
  color: ${COLORS.white};
  &:active {
    background: ${COLORS.secondary};
    transform: scale(0.95);
  }
  &:hover {
    background: ${COLORS.secondary};
  }
`;

export default Button;
