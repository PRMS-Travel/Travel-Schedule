import styled from "styled-components";

export const StyledButton = styled.button<{
	width?: string;
}>`
    font-size: 16px;
    width: ${({ width }) => width || "80px"};
    height: 50px;
    background-color: white;
    border: 1px solid #1E2A3C;
    border-radius: 5px;
    &.submit {
        background-color: #1E2A3C;
        font-weight: bold;
        color: white;
    }
    cursor: pointer;
`;

export const ButtonWrap = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`;