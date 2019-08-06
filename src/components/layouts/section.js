import styled from "styled-components";

const Section = styled.div`
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4) !important;
    background: url(${props => props.theme.image}) no-repeat;
    background-size: contain;
    background-position: bottom -400px center;
    display: flex;
    align-items: center;
`;

export default Section;
