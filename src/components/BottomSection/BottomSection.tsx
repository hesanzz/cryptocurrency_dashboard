import MarketOverview from "./MarketOverview"
import MarketTrend from "./MarketTrend"
import QuickTransfer from "./QuickTransfer"

export const BottomSection = () => {
    {/* Bottom Section - 3:1:2 ratio */ }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 h-full mt-6">
            {/* Left: MarketOverview (half width on large) */}
            <div className="lg:col-span-2 md:col-span-2 col-span-1 flex flex-col h-full">
                <MarketOverview />
            </div>

            {/* QuickTransfer: 1/4 */}
            <div className="lg:col-span-1 md:col-span-1 col-span-1 flex flex-col h-full">
                <QuickTransfer />
            </div>

            {/* MarketTrend: 1/4 */}
            <div className="lg:col-span-1 md:col-span-1 col-span-1 flex flex-col h-full">
                <MarketTrend />
            </div>
        </div>
    );
}