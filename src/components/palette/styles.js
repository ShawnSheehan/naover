import styled from "styled-components";

export const PaletteWrapper = styled.div`
    display: flex;
    width: 50px;
    height: 20px;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 25px;
    top: 25px;
`;

export const PalettePaint = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
`;
