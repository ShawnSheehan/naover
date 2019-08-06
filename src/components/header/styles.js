import styled from "styled-components";

export const HeaderWrapper = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    background-color: transparent;
    z-index: 3;
`;

export const Brand = styled.h3`
    margin: 29px 0 0 30px;
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
    font-size: 1.65vh;
    letter-spacing: 0.2em;
`;
