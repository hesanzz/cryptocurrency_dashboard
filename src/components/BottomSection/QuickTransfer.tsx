import { motion } from "framer-motion";
import Text from "../Atoms/Text";
import Female from "../../assets/female.png";
import Male from "../../assets/male.png";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import { DollarSign, Plus, Send } from "lucide-react";

// QuickTransfer component provides a UI for quickly transferring funds to selected users
const QuickTransfer: React.FC = () => {
    return (
        <motion.div
            className="flex-1 h-full bg-dark-card rounded-xl p-6 border border-gray-600 "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
        >
            {/* Panel title */}

            <Text tag='h3' className="text-white text-lg font-semibold">Quick Transfer</Text>
            {/* Avatars for recent or favorite contacts and an add new button */}

            <div className="flex items-center gap-4 mb-4 mt-6">
                {/* Example avatars */}
                <img
                    src={Female}
                    alt="Avatar 1"
                    className="w-12 h-12 rounded-full border-2 border-purple-400"
                />
                <img
                    src={Male}
                    alt="Avatar 2"
                    className="w-12 h-12 rounded-full border-2 border-purple-400"
                />

                {/* Add New contact button */}
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#6210cc] flex items-center justify-center text-purple-400 text-xl">
                    <Plus size={24} color="white" />
                </div>
            </div>
            {/* Amount input section */}

            <div className="mb-4 flex items-center gap-0.1">
                <label className="text-sm text-purple-400 font-medium">Amount:</label>

                <div className="flex items-center rounded px-3 py-2">
                    <Text tag='span' className="text-[#6210cc] font-bold mr-1">
                        <DollarSign size={16} />
                    </Text>
                    {/* Input for entering the transfer amount */}

                    <Input
                        type="number"
                        defaultValue="3.25"
                        className="bg-transparent font-semibold text-lg focus:outline-none w-full text-white p-0"
                    />
                </div>
            </div>

            <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors px-4 py-2 rounded flex items-center justify-center gap-2">
                <Send size={16} />
                Transfer Now
            </Button>

        </motion.div>
    )
}
export default QuickTransfer;