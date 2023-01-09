import "./App.css";
import { StatusComponent } from "./showstatus.js";
import { ConnectComponent } from "./connectwallet.js";
import { StarknetConfig, InjectedConnector } from "@starknet-react/core";

// function MyApp({ Component, pageProps }) {
//   const connectors = [
//     new InjectedConnector({ options: { id: 'braavos' }}),
//     new InjectedConnector({ options: { id: 'argentX' }}),
//   ]
//   return (
//     <StarknetConfig connectors={connectors}>
//       <Component {...pageProps} />
//     </StarknetConfig>
//   )
// }

const App = () => {
  const connectors = [
    new InjectedConnector({ options: { id: "braavos" } }),
    new InjectedConnector({ options: { id: "argentX" } }),
  ];

  const handleBtnWallet = () => {
    // action buttons
    console.log("button wallet clicked");
  };

  return (
    <StarknetConfig connectors={connectors}>
      <div className="btn" onClick={() => handleBtnWallet()}>
        Wallet
      </div>
      <div className="btn">Mint</div>

      <div className="btn">Button 1</div>
      <div className="btn">Button 2</div>
      <ConnectComponent></ConnectComponent>
      <StatusComponent></StatusComponent>
    </StarknetConfig>
  );
};

export default App;
