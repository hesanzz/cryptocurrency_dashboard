import { Line } from "recharts";

import { motion } from "framer-motion";
import LineChartWrapper from "../Atoms/LineChartWrapper";
import ImgContainer from "../Atoms/ImgContainer";

interface CryptoCardProps {
    // Define any props you need for the CryptoCard component 
    key?: string | number;
    symbol?: string;
    image?: string;
    name?: string;
    price: number;
    change: number;
    pair: string;
    chartData?: { time: string; value: number }[];
    strokeColor?: string;
    arrow?: string;
}
const CrytoCard = (props: CryptoCardProps) => {
    // CryptoCard component that will display cryptocurrency information
    const { image, price, change, pair, chartData, strokeColor, arrow } = props;


    return (

        <motion.div
            className="bg-dark-card rounded-xl p-6 hover:bg-dark-accent transition-all duration-300 cursor-pointer group border relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >            {/* Coin icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2  p-2 rounded-full">
                <ImgContainer src={image} alt="icon" className="w-12 h-12" />
            </div>

            {/* Pair */}
            <div className="flex font-bold justify-between text-xs text-gray-300 mt-6">
                <div>
                    <span>{pair.split("/")[0]}</span>
                    <span className="mx-1">↔</span>
                    <span>{pair.split("/")[1]}</span>
                </div>
                {/* Change */}
                <div
                    className={`text-sm mt-1 ${change >= 0 ? "text-green-400" : "text-red-400"
                        } display flex items-center gap-1`}
                >
                    {change >= 0 ? <ImgContainer src={arrow} alt="icon" className="w-4 h-4" />
                        : <ImgContainer src={arrow} alt="icon" className="w-4 h-4" />
                    }
                    {change.toFixed(1)}%
                </div>
            </div>

            {/* Price */}
            <div className="text-2xl font-semibold mt-2 text-white">{price.toFixed(2)}</div>

            {/* Chart */}
            <div className="mt-2">

                {/* Render the chart using the provided chartData and strokeColor */}
                <LineChartWrapper data={chartData} height={40} xAxisHide={true} yAxisHide={true} isShowTooltip={false} yDomain={["dataMin", "dataMax"]}>
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke={strokeColor}
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChartWrapper>
            </div>
        </motion.div>

    )
}
export default CrytoCard;
// CryptoCard component that will display cryptocurrency information