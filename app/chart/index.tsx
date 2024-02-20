import { Chart, ChartProvider } from "./Chart";


const ChartComponent = () => {
	return (
		<ChartProvider>
			<Chart />
		</ChartProvider>
	);
};

export default ChartComponent;