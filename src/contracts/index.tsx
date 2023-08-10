import { useEthers } from '@usedapp/core';
import * as deployments from '../contracts/deployments.json'; //weird behavior
import { config } from '../lib/config';
import type { IDeployments } from '../lib/types';

export const rootName = 'dapptest.eth';

export function deployment(contractName: string, chainId: number) {
  const contract = (deployments as IDeployments)[
    chainId as keyof IDeployments
  ]?.[contractName];
  return contract;
}

//useInterface -- fetch from typechain files

export function useDeployments(contractName: string) {
  const chainId = useEthers().chainId || (config.readOnlyChainId as number);
  return (deployments as IDeployments)[chainId as keyof IDeployments]?.[
    contractName
  ];
}

// export function useFacet(contractName: string) {
//   return new ethers.Contract(
//     useDeployments(contractName)?.abi,
//     useDeployments('Diamond')?.address,
//     useEthers().library
//   );
// }
