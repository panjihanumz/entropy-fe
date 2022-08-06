import styled from "styled-components";
import COLORS from "utils/colors";

const Input = styled.input`
    font-size: 14px;
    padding: 10px;
    background: ${COLORS.bgGray};
    border: none;
    border-radius: 3px;
    transition: all ease 1s;
    color: ${COLORS.defaultText};
    ::placeholder {
        color: ${COLORS.defaultPlaceholder};
    }
    &:hover {
        transform: scale(0.98);
    }
    &:focus{
        outline: none;
    }
`;

export default Input;