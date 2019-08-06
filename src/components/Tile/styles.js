import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const rotateOff = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(0deg);
}
`;

export const TileWrapper = styled.div`
    margin: 5px 10px;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.transparent} !important;
    background: url(${({ img }) => (img ? img : "")}) no-repeat;
    background-size: cover;
    background-position: 50% 60%;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    animation: ${({ loading }) => (loading ? rotate : rotateOff)} 2s linear
        infinite;
    svg {
        fill: ${({ theme }) => theme.primary} !important;
    }
`;
