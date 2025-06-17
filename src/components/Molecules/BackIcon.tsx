import { ChevronLeft } from "lucide-react";
import Button from "../Atoms/Button";

// Props for the BackIcon component
type BackIconProps = {
    className?: string;
};

// BackIcon displays a left chevron icon inside a styled button for navigation
const BackIcon: React.FC<BackIconProps> = ({ className = "" }) => {
    return (
        <Button className={`bg-dark-card text-white px-2 py-2 rounded-full w-10 h-10 hover:bg-dark-accent${className}`}>
            <ChevronLeft size={24} />
        </Button>
    );
};

export default BackIcon;
