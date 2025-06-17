import { motion } from "framer-motion";
import React, { useState } from "react";

import Dropdown from "../Atoms/Dropdown";
import { graphPoints } from "../../constants";
import Button from "../Atoms/Button";
import LineChartWrapper from "../Atoms/LineChartWrapper";
import { Line } from "recharts";

type Range = "1D" | "1W" | "1M" | "ETH/USD" | "BTC/USD";
// Define the type for the range, which can be either a time period or a currency pair
const periods: Range[] = ["1D", "1W", "1M"];
const options: Range[] = ["ETH/USD", "BTC/USD"];


// ChartPanel component displays a chart with selectable time periods and currency pairs
const ChartPanel: React.FC = () => {
    const [range, setRange] = useState<Range>("1D");

    return (
        <motion.div
            className="bg-dark-card rounded-xl p-6 border border-gray-600 "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
        >
            {/* Top controls: Dropdown for currency pair and buttons for time periods */}

            <div className="flex justify-between max-sm:flex-col items-center mb-4">
                <div className="p-2 bg-dark-secondary text-white rounded-lg  max-sm:mb-2">
                    {/* Dropdown for selecting currency pair */}

                    <Dropdown options={options} className="flex items-center bg-dark-secondary font-semibold text-white" />
                </div>
                <div className="flex gap-2">
                    {periods.map((period) => (
                        // Buttons for selecting time periods
                        <Button key={period} onClick={() => setRange(period)} className={`px-3 py-2 rounded-lg rounded ${range === period ?
                            "text-white bg-dark-secondary font-bold"
                            : "text-white bg-dark-secondary border bg-opacity-60 border-gray-600"
                            }`}>
                            {period}

                        </Button>
                    ))}
                </div>
            </div>

            {/* Chart displaying data for the selected options */}

            <LineChartWrapper data={graphPoints} height={200} xAxisHide={true} yDomain={[0, 50000]}>
                <Line
                    type="monotone" dataKey="uv" stroke="#FF00FF" strokeWidth={2} dot={false} />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#41b4d1"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChartWrapper>

        </motion.div>
    );
};

export default ChartPanel;
