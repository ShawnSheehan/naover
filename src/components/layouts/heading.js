import styled from "styled-components";

const Heading = styled.div`
    padding-top: 50px;
    margin: auto;
    text-transform: uppercase;
    font-size: 4.5vh;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    flex: 1;
`;

export default Heading;
