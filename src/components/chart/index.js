import React, { useState } from "react";
import { PieChart, Pie, Legend } from "recharts";

const Chart = ({ selectDay, selectCam, selectAll }) => {
    const [cam, setCam] = useState("");
    const [sol, setSol] = useState("");

    const onDaySelect = e => {
        setSol(e.name);
        selectDay(e.name);
    };

    const onCamSelect = e => {
        setCam(e.name);
        selectCam(e.name);
    };

    const onAllSelect = e => {
        setCam(e.name);

        if (sol && cam) {
            selectAll(sol, cam);
            selectDay(e.name);
            setCam(e.name);
        } else {
            onCamSelect(e);
        }
    };

    return (
        <PieChart width={500} height={500}>
            <Legend verticalAlign="top" height={36} width={450} />
            <Pie
                data={cam}
                cx={250}
                cy={250}
                outerRadius={120}
                fill="#8884d8"
                onClick={() => onAllSelect()}
                label
                dataKey="value"
            />
            <Pie
                data={sol}
                cx={250}
                cy={250}
                innerRadius={140}
                outerRadius={180}
                fill="#82ca9d"
                label
                onClick={() => onDaySelect()}
                dataKey="value"
            />
        </PieChart>
    );
};

export default Chart;
