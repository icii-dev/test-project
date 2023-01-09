import { useConnectors } from "@starknet-react/core";

function ConnectComponent() {
  const { connect, connectors } = useConnectors();

  return (
    <ul>
      {connectors.map((connector) => (
        <li key={connector.id()}>
          <button onClick={() => connect(connector)}>
            Connect {connector.id()}
          </button>
        </li>
      ))}
    </ul>
  );
}

export { ConnectComponent };
