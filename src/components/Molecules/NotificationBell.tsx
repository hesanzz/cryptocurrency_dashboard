import { Bell } from "lucide-react";
import Button from "../Atoms/Button";

// Props for the NotificationBell component
type NotificationBellProps = {
    className?: string;
};
// NotificationBell displays a bell icon with a notification indicator badge

const NotificationBell: React.FC<NotificationBellProps> = ({ className = "" }) => {
    return (
        <Button className={`p-2 hover:bg-dark-accent bg-dark-card transition-colors h-10 rounded-full border-2 border-gray-600 relative ${className}`}>
            <Bell className="w-6 h-6 text-white" />
            {/* Notification indicator badge (red dot) */}

            <span className="absolute -top-1 -right-1 w-3 h-3 bg-crypto-red border border-white rounded-full"></span>
        </Button>
    );
};

export default NotificationBell;
