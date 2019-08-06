import styled from "styled-components";

const SectionModule = styled.div`
    background: ${({ img }) => (img ? `url(${img})` : null)} center center
        no-repeat;
    background-size: cover;
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    left: 50%;
    margin: 0 auto;
    min-width: 500px;
    min-height: 350px;
    max-width: 500px;
    max-width: 500px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
`;

export default SectionModule;
