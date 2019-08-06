import styled from "styled-components";

const Status = styled.div`
    bottom: calc(100% + 30px);
    left: 0px;
    margin: 0;
    padding: 0;
    position: absolute;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary} !important;

    span {
        color: ${({ theme }) => theme.primary} !important;
        margin-left: 10px;
    }
`;

export default Status;
