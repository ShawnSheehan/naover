import styled from "styled-components";

const Details = styled.div`
    opacity: 1;
    -ms-transform: translateX(0px);
    position: absolute;
    top: calc(50% - 50vh + 47vh);
    right: -110px;
    padding-left: 0px;
    margin-bottom: 30px;
    white-space: nowrap;
    font-size: 1.65vh;
    -webkit-letter-spacing: 0.2em;
    -moz-letter-spacing: 0.2em;
    -ms-letter-spacing: 0.2em;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.primary};
    line-height: 1.2;

    &:before {
        transform: translateX(-30px);
        content: "";
        position: absolute;
        width: 2px;
        background: ${({ theme }) => theme.primary};
        top: -10px;
        bottom: -10px;
        left: 0;
    }
`;

export default Details;
