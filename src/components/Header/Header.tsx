import { motion } from "framer-motion";
import Text from "../Atoms/Text";
import profileIcon from "../../assets/profile.png";
import NotificationBell from "../Molecules/NotificationBell";
import BackIcon from "../Molecules/BackIcon";
import Input from "../Atoms/Input";
import { Search } from "lucide-react";
import ImgContainer from "../Atoms/ImgContainer";
const Header = () => {
    return (
        <motion.header
            className="flex items-center justify-between p-6 bg-dark-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >

            <div className="flex items-center space-x-10">
                <BackIcon />
                <Text tag='h1' className="text-white text-2xl font-bold max-sm:hidden">
                    Home
                </Text>
            </div>
            <div className="flex items-center space-x-8">
                <div className="relative bg-dark-card rounded-full w-64 h-10 mt-2 max-md:hidden">
                    <Input type="text" placeholder="Search" className="bg-dark-card text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-dark-accent hover:bg-dark-accent rounded-full px-4 py-2 w-64" />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative w-8 h-8">
                    <NotificationBell />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                    <ImgContainer
                        src={profileIcon}
                        alt="Avatar 1"
                        className="w-10 h-10 rounded-full border-2 border-purple-400"
                    />
                </div>
            </div>

        </motion.header>
    )
}
export default Header;