import { createContext } from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

interface ChartModel {}
const ChartContext = createContext<ChartModel>({});

interface ChartProviderProps {
	children: React.ReactNode;
}
const ChartProvider: React.FC<ChartProviderProps> = (props) => {
	return <ChartContext.Provider value={{}}>{props.children}</ChartContext.Provider>;
};

const Chart = () => {
	return (
        <SafeAreaView
            style={{
                flex: 1,
                width: '100%',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 6,
            }}
        >
			<WebView
				javaScriptEnabled={true}
				startInLoadingState={true}
				scrollEnabled={false}
				injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);`}
				onMessage={() => {}}
				originWhitelist={['*']}
				source={require('../../assets/index.html')}
			/>
		</SafeAreaView>
	);
};

export { Chart, ChartProvider };