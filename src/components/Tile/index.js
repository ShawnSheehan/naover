import React from "react";
import { TileWrapper } from "./styles";

const Tile = ({ img, loading, onClick }) => {
    return <TileWrapper img={img} onClick={onClick} loading={loading} />;
};

export default Tile;
