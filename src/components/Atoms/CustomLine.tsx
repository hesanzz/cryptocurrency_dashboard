import React from "react";
import { Line } from "recharts";

type CustomLineProps = {
    // Define any props you need for the CustomLine component  
    dataKey: string;
    stroke: string;
    strokeWidth: number;
}

const CustomLine: React.FC<CustomLineProps> = ({ dataKey, stroke, strokeWidth = 3 }) => (
    <Line type="monotone" dataKey={dataKey} stroke={stroke} strokeWidth={strokeWidth} />
);
// CustomLine component that renders a line in a Recharts LineChart
export default CustomLine;