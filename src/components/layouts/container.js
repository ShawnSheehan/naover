import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
    background-color: ${({ theme }) => theme.background} !important;
    background: ${props => `url(${props.theme.image})`} no-repeat;
    background-size: contain;
    background-position: bottom -400px center;
    position: relative;
    width: calc(100vw - 30px);
    height: calc(100vh - 30px);
    margin: 15px;
    -webkit-overflow-scrolling: touch;
    animation: ${fadeIn} 3s;
    opacity: 1;
`;

export default Container;
