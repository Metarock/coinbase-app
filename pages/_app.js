import '../styles/globals.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

const supportedChainsId = [4];
const connectors = {
    injected: {},
};

function MyApp({ Component, pageProps }) {
    return (
        <ThirdwebWeb3Provider
            supportedChainIds={supportedChainsId}
            connectors={connectors}
        >
            <Component {...pageProps} />
        </ThirdwebWeb3Provider>
    );
}

export default MyApp;
