import { motion } from "framer-motion";
import Dropdown from "../Atoms/Dropdown";
import Text from "../Atoms/Text";
import LineChartWrapper from "../Atoms/LineChartWrapper";
import { Line } from "recharts";
import { marketOverviewData } from "../../constants";

const MarketOverview: React.FC = () => {
    type Range = "Hourly" | "Daily" | "Weekly" | "Monthly" | "Yearly";
    // Define the type for the range, which can be either a time period or a currency pair
    const periods: Range[] = ["Hourly", "Daily", "Weekly", "Monthly", "Yearly"];
    return (
        <motion.div
            className="h-full bg-dark-card rounded-xl p-6 border border-gray-600 "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
        >
            {/* Top controls: Dropdown for currency pair and buttons for time periods */}

            <div className="flex justify-between items-center mb-4">
                <Text tag='h3' className="text-white text-lg font-semibold">Market Overview</Text>

                <div className="p-2 bg-dark-secondary text-white rounded-lg">
                    {/* Dropdown for selecting the range to view the market overview */}

                    <Dropdown options={periods} className={"flex items-center bg-dark-secondary font-semibold text-white"} />
                </div>
            </div>

            {/* Chart displaying data for the selected options */}

            <LineChartWrapper data={marketOverviewData} height={200} xAxisHide={true} isShowTooltip={false} yDomain={[0, 50000]}>
                <Line
                    type="monotone"
                    dataKey="bitcoin"
                    stroke="#FF00FF"
                    strokeWidth={2}
                    dot={false} />
                <Line
                    type="monotone"
                    dataKey="ethereum"
                    stroke="#41b4d1"
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    type="monotone"
                    dataKey="litecoin"
                    stroke="#6210cc"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChartWrapper>

        </motion.div>
    );

}
export default MarketOverview;