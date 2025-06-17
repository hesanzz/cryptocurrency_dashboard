import ImgContainer from "../Atoms/ImgContainer";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { Home, TrendingUp, Wallet, Settings, LogOut } from "lucide-react";

// Sidebar component displays the main navigation menu on the left side
const Sidebar: React.FC = () => {

    // Navigation items with icons and labels
    const navigationItems = [
        { icon: Home, label: 'Dashboard', active: true },
        { icon: TrendingUp, label: 'Markets', active: false },
        { icon: Wallet, label: 'Portfolio', active: false },
        { icon: Settings, label: 'Settings', active: false }
    ];
    return (
        //Sidebar content: logo and navigation 
        <motion.aside
            className="w-20 bg-dark-primary flex flex-col items-center px-4 py-6 border-r border-gray/600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex flex-col items-center h-full justify-between">
                {/* Logo at the top */}

                <div className="flex items-center pt-2 mb-[12rem]">
                    <ImgContainer
                        src={Logo}
                        alt="logo"
                        className=""
                    />
                </div>
                {/* Navigation menu */}

                <nav className="flex-1 space-y-6">
                    {navigationItems.map((menu, index) => (
                        <motion.button
                            key={index}
                            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 ${menu.active
                                ? 'bg-crypto-purple text-white shadow-lg shadow-crypto-purple/25'
                                : 'text-gray-400 hover:text-white hover:bg-dark-card'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            {/* Icon for the menu item */}

                            <menu.icon className="w-8 h-8" />
                        </motion.button>
                    ))}
                </nav>
            </div>

            {/* Logout button at the bottom */}
            <motion.button
                className="w-12 h-12 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-dark-card transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <LogOut className="w-8 h-8" />
            </motion.button>
        </motion.aside>
    )
}
export default Sidebar;