import { Config, Sepolia } from '@usedapp/core';
import { deployment } from '../../contracts';

export const config: Config = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: process.env.REACT_APP_INFURA_ETH_SEPOLIA_URL!,
  },
  multicallAddresses: {
    [Sepolia.chainId]: deployment('Multicall2', Sepolia.chainId)?.address,
  },
  multicallVersion: 2,
};

export default config;
