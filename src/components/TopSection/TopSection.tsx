import ChartPanel from "./ChartPanel"
import PromoBanner from "./PromoBanner"

export const TopSection: React.FC = () => {
    // This component serves as a container for the top section of the dashboard
    // It includes a promotional banner and a chart panel
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
            <PromoBanner />
            <ChartPanel />
        </div>
    )
}
