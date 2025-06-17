// This file contains constants used throughout the application

import Bitcoin from "../assets/bitcoin.png";
import Ethereum from "../assets/ethereum.png";
import Litecoin from "../assets/litecoin.png";
import Increment from "../assets/increment_arrow.png";
import Decrement from "../assets/decrement_arrow.png";

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
interface CryptoAsset {
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

{/*######################################################################################################################*/ }

//The graph points data used in the chartPanel component
export const graphPoints: GraphPoint[] = [
    { name: "Point 1", uv: 50000, pv: 0 },
    { name: "Point 2", uv: 50000, pv: 0 },
    { name: "Point 3", uv: 50000, pv: 20000 },
    { name: "Point 4", uv: 30000, pv: 30000 },
    { name: "Point 5", uv: 10000, pv: 50000 },
    { name: "Point 5", uv: 10000, pv: 30000 },
    { name: "Point 5", uv: 0, pv: 20000 },
    { name: "Point 5", uv: 30000, pv: 0 },
    { name: "Point 5", uv: 50000, pv: 0 },
];

// This file contains the cryptocurrency data used in the application
export const cryptoData: CryptoAsset[] = [
    {
        id: 1,
        symbol: 'BTC',
        image: Bitcoin,
        name: 'Bitcoin',
        price: 84442.55,
        change: 6.2,
        arrow: Increment,
        pair: 'BTC/USD',
        chartData: [
            { time: '1', value: 80000 },
            { time: '2', value: 79500 },
            { time: '3', value: 81200 },
            { time: '4', value: 80800 },
            { time: '5', value: 82400 },
            { time: '6', value: 83200 },
            { time: '7', value: 84442 }
        ],
        strokeColor: '#FF00FF'
    },
    {
        id: 2,
        symbol: 'ETH',
        image: Ethereum,
        name: 'Ethereum',
        price: 4772.18,
        change: -3.8,
        arrow: Decrement,
        pair: 'ETH/USD',
        chartData: [
            { time: '1', value: 5000 },
            { time: '2', value: 4800 },
            { time: '3', value: 4600 },
            { time: '4', value: 4900 },
            { time: '5', value: 4700 },
            { time: '6', value: 4850 },
            { time: '7', value: 4772 }
        ],
        strokeColor: '#41b4d1'
    },
    {
        id: 3,
        symbol: 'LTC',
        image: Litecoin,
        name: 'Litecoin',
        price: 3612.65,
        change: 4.2,
        arrow: Increment,
        pair: 'LTC/USD',
        chartData: [
            { time: '1', value: 3400 },
            { time: '2', value: 3350 },
            { time: '3', value: 3500 },
            { time: '4', value: 3550 },
            { time: '5', value: 3600 },
            { time: '6', value: 3580 },
            { time: '7', value: 3612 }
        ],
        strokeColor: '#FF00FF'
    },
    {
        id: 4,
        symbol: 'ETH',
        image: Ethereum,
        name: 'Ethereum',
        price: 4772.18,
        change: -3.8,
        arrow: Decrement,
        pair: 'ETH/USD',
        chartData: [
            { time: '1', value: 5000 },
            { time: '2', value: 4800 },
            { time: '3', value: 4600 },
            { time: '4', value: 4900 },
            { time: '5', value: 4700 },
            { time: '6', value: 4850 },
            { time: '7', value: 4772 }
        ],
        strokeColor: '#41b4d1'
    },
    {
        id: 5,
        symbol: 'BTC',
        image: Bitcoin,
        name: 'Bitcoin',
        price: 84442.55,
        change: 6.2,
        arrow: Increment,
        pair: 'BTC/USD',
        chartData: [
            { time: '1', value: 80000 },
            { time: '2', value: 79500 },
            { time: '3', value: 81200 },
            { time: '4', value: 80800 },
            { time: '5', value: 82400 },
            { time: '6', value: 83200 },
            { time: '7', value: 84442 }
        ],
        strokeColor: '#FF00FF'
    }
];

// This file contains the market overview data used in the application
export const marketOverviewData: MarketOverviewDataPoint[] = [
    { time: '00:00', bitcoin: 50000, ethereum: 0, litecoin: 0, name: "0" },
    { time: '02:00', bitcoin: 50000, ethereum: 20000, litecoin: 15000, name: "0" },
    { time: '04:00', bitcoin: 50000, ethereum: 0, litecoin: 10000, name: "10K" },
    { time: '06:00', bitcoin: 15000, ethereum: 15000, litecoin: 10000, name: "10K" },
    { time: '08:00', bitcoin: 5000, ethereum: 20000, litecoin: 10000, name: "10K" },
    { time: '10:00', bitcoin: 35000, ethereum: 10000, litecoin: 30000, name: "20K" },
    { time: '12:00', bitcoin: 50000, ethereum: 20000, litecoin: 20000, name: "20K" },
    { time: '14:00', bitcoin: 35000, ethereum: 0, litecoin: 35000, name: "30K" },
    { time: '16:00', bitcoin: 20000, ethereum: 10000, litecoin: 20000, name: "30K" },
    { time: '18:00', bitcoin: 15000, ethereum: 15000, litecoin: 15000, name: "40K" },
    { time: '20:00', bitcoin: 10000, ethereum: 25000, litecoin: 0, name: "40K" },
    { time: '22:00', bitcoin: 10000, ethereum: 33000, litecoin: 35000, name: "50K" },
    { time: '24:00', bitcoin: 47000, ethereum: 48000, litecoin: 50000, name: "50K" }
];

// This file contains the market trend data used in the application
export const marketTrend: MarketItem[] = [
    { symbol: "BTC", name: "Bitcoin", lastPrice: 8594, change: 2540 },
    { symbol: "BNB", name: "BNB", lastPrice: 57207, change: 2304 },
    { symbol: "ETH", name: "Ethereum", lastPrice: 71129, change: -1320 },
    { symbol: "LTC", name: "Litecoin", lastPrice: 18661, change: 2140 },
    { symbol: "ADA", name: "Cardano", lastPrice: 37166, change: 1976 },
    { symbol: "CAKE", name: "Pancake", lastPrice: 72650, change: -1903 },
];