import { useEthers } from '@usedapp/core';
import { SlButton } from '../../design/shoelace';

function Wallet() {
  const { account, deactivate, activateBrowserWallet } = useEthers();

  return (
    <div id="wallet">
      {account ? (
        <SlButton variant="text" onClick={() => deactivate()}>
          CONNECTED
        </SlButton>
      ) : (
        <SlButton variant="primary" onClick={() => activateBrowserWallet()}>
          CONNECT
        </SlButton>
      )}
    </div>
  );
}

export default Wallet;
