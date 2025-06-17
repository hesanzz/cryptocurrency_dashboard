import { motion } from "framer-motion";
import Text from "../Atoms/Text";
import { marketTrend } from "../../constants";
import TriangleUp from "../../assets/triangleUp.png";
import TriangleDown from "../../assets/triangleDown.png";
import ImgContainer from "../Atoms/ImgContainer";

// MarketTrend component displays a list of trending market assets with price and change indicators
const MarketTrend: React.FC = () => {
    return (
        <motion.div
            className="h-full bg-dark-card rounded-xl p-6 border border-gray-600 "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
        >
            {/* Panel title */}

            <Text tag='h3' className="text-white text-lg font-semibold">Market Trend</Text>
            {/* Table header */}

            <div className="grid grid-cols-3 text-gray-400 text-sm font-medium mb-2">
                <Text tag='span' >Name</Text>
                <Text tag='span' >Last Price</Text>
                <Text tag='span' >24th Change</Text>

            </div>
            {/* Render each market trend item */}

            {marketTrend.map((item, index) => (
                <div key={index} className="grid grid-cols-3 text-sm font-medium mb-2">
                    {/* Asset symbol and name */}
                    <div className="flex flex-row space-x-2">
                        <Text tag='span' className="text-white">{item.symbol}</Text>
                        <Text tag='span' className="text-gray-400 truncate max-w-[100px]">{item.name}</Text>
                    </div>
                    {/* Last price */}
                    <Text tag='span' className="text-gray-400 items-center">{`$ ${item.lastPrice}`}</Text>
                    {/* 24h change with up/down indicator */}
                    <div className="flex items-center gap-1">
                        <Text tag='span' className="text-white">{Math.abs(item.change).toLocaleString()}</Text>
                        {item.change >= 0 ? (
                            <ImgContainer src={TriangleUp} alt="icon" className="w-3 h-3 ml-2" />
                        ) : (
                            <ImgContainer src={TriangleDown} alt="icon" className="w-3 h-3 ml-2" />
                        )}
                    </div>
                </div>
            ))}

        </motion.div>
    )
}
export default MarketTrend;