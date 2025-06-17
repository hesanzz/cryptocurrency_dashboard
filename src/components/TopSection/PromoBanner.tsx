import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Atoms/Button';
import Text from '../Atoms/Text';

const PromoBanner: React.FC = () => {
    return (
        <motion.div
            className="bg-gradient-to-r from-gradient-start to-gradient-end rounded-xl p-6 text-white relative overflow-hidden border border-gray-600"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
        >
            <div className='text-white'>
                {/* Tag label */}

                <Text tag="span" className="text-xs font-semibold px-2 py-1">
                    ETHEREUM 2.0
                </Text>
                <Text tag="h2" className="text-2xl font-bold mb-2">Your Gateway<br />into Blockchain</Text>
                <Text tag="p" className="text-white mb-10 font-bold text-sm">
                    Paronia is a blockchain platform.<br />
                    We make blockchain accessible.
                </Text>
                <Button className="bg-dark-button backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-black/40 hover:scale-105 transition-colors">
                    Learn More.

                </Button>
            </div>

            {/* Decorative gradient and colored shapes for visual appeal */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mb-12"></div>
            <div className="absolute top-1/2 right-8 w-16 h-16 bg-crypto-cyan/30 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute bottom-4 right-16 w-8 h-8 bg-crypto-orange/40 rounded-full"></div>
            <div className="absolute top-4 right-24 w-12 h-12 bg-crypto-green/20 rounded-lg transform rotate-45"></div>
        </motion.div>
    );
};

export default PromoBanner;