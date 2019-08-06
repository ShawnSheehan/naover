import React from "react";
import { TileWrapper } from "./styles";

const Tile = ({ img, loading, onClick, children }) => {
    if (!children)
        return <TileWrapper img={img} onClick={onClick} loading={loading} />;
    return (
        <TileWrapper img={img} onClick={onClick} loading={loading}>
            {children}
        </TileWrapper>
    );
};

export default Tile;
