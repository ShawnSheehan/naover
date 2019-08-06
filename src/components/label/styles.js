import styled from "styled-components";

export const LabelWrapper = styled.div`
    transform-origin: top left;
    white-space: nowrap;
    font-size: 1.65vh;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.primary};
    transform: rotate(-90deg);
    position: absolute;
    left: 29px;
    top: 70%;
    text-transform: uppercase;
`;
