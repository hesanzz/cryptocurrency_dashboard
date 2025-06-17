// The GraphPoint interface defines the structure of a point in the graph
// It includes properties for name, uv, and pv
export interface GraphPoint {
    name: string;
    uv: number;
    pv: number;
}

// The ChartDataPoint interface defines the structure of a data point in the chart
// It includes properties for time and value, where time is a string and value is a number
interface ChartDataPoint {
    time: string;
    value: number;
}

// The CryptoAsset interface defines the structure of a cryptocurrency asset
// It includes properties for id, symbol, image, name, price, change percentage, arrow
export interface CryptoAsset {
    id: number;
    symbol: string;
    image: string;  // Image URL for the cryptocurrency
    name: string;
    price: number;
    change: number;
    arrow: string; // Image representing the change direction (increment/decrement)
    pair: string;
    chartData: ChartDataPoint[];
    strokeColor: string;
}

// The MarketOverviewDataPoint interface defines the structure of a data point in the market overview
// It includes properties for time, bitcoin price, ethereum price, litecoin price, and a
export interface MarketOverviewDataPoint {
    time: string;
    bitcoin: number;
    ethereum: number;
    litecoin: number;
    name: string;
}

// The MarketItem interface defines the structure of a market item
// It includes properties for the symbol, name, last price, and change percentage
export interface MarketItem {
    symbol: string;
    name: string;
    lastPrice: number;
    change: number;
}
