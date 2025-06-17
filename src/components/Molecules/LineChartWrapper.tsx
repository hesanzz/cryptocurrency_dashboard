import { LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type LineChartWrapperProps = {
    // Data to be displayed in the chart
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any[];
    // Child components, typically <Line> elements
    children?: React.ReactNode;
    // Height of the chart container
    height?: number | string;
    // Domain for the Y axis (min and max values)
    yDomain?: [number | string, number | string];
    // Whether to hide the X axis
    xAxisHide?: boolean;
    // Whether to hide the Y axis (default: false)
    yAxisHide?: boolean;
    // Whether to show the tooltip (default: true)
    isShowTooltip?: boolean;

}
const LineChartWrapper = (props: LineChartWrapperProps) => {
    const { data, children, yDomain, xAxisHide, yAxisHide = false, height, isShowTooltip = true } = props;
    return (
        // ResponsiveContainer makes the chart responsive to its parent width/height

        <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data}>
                <XAxis hide={xAxisHide} />
                <YAxis domain={yDomain} stroke='white' hide={yAxisHide} pointsAtY={5} />
                {isShowTooltip ? <Tooltip /> : null}

                {children}
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineChartWrapper;