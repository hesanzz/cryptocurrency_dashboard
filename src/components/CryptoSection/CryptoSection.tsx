import { motion } from "framer-motion"
import CrytoCard from "./CryptoCard"

import { cryptoData } from "../../constants"

export const CryptoSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 overflow-x-auto">
            {cryptoData.map((crypto, index) => (
                <motion.div
                    key={index}
                    className=" pt-6 transition-all duration-300 group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    <CrytoCard {...crypto} />

                </motion.div>
            ))}
        </div>
    )
}