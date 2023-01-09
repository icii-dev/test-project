import { useAccount } from "@starknet-react/core";

function StatusComponent() {
  const { account, address, status } = useAccount();

  if (status === "disconnected") return <p>Disconnected</p>;
  return <p>Account: {address}</p>;
}

export { StatusComponent };
