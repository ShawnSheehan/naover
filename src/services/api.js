import axios from "axios";

const API_KEY = `z2IfhXlVEzHoA6TFYyd97ODUEgWZJsk5mfEpVsJv`;

export const initRoverData = (rover, sol) =>
    axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${API_KEY}`,
    );

export const getRoverData = (rover, camera, sol) =>
    axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`,
    );
