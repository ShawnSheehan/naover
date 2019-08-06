import styled, { keyframes } from "styled-components";

const rotateOn = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
`;

const rotateOut = keyframes`
from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const slideIn = keyframes`
from {
  transform: translateX(50vw);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
from {
  transform: translateX(0);
  }
  to {
    transform: translateX(50vw);
  }
`;

export const MenuAction = styled.div`
    position: fixed;
    right: 74px;
    bottom: 52px;
    width: 60px;
    height: 60px;
    z-index: 10;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    animation: ${({ active }) => (active ? rotateOn : rotateOut)} 1s ease-in-out;
    animation-fill-mode: forwards;
`;

export const MenuWrapper = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    width: 50vw;
    height: 100vh;
    z-index: 8;
    text-decoration: none;
    cursor: pointer;
    background-color: #ffffff;
    align-items: center;
    display: flex;
    animation: ${({ active }) => (active ? slideIn : slideOut)} 1s ease-in-out;
    animation-fill-mode: forwards;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-between;
`;
