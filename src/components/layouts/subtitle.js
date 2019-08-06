import styled from "styled-components";

const Subtitle = styled.div`
    margin: auto;
    text-transform: uppercase;
    font-size: 1.75vh;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    flex: 1;
    padding-bottom: 50px;
`;

export default Subtitle;
