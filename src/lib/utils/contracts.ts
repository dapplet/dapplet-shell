import { Contract } from 'ethers';
import { parseEther } from 'ethers/lib/utils';

export interface IFacetCut {
  target: string;
  action: number;
  selectors: string[];
}

const action = { add: 0, replace: 1, remove: 2 };

export function createAddFacetCut(contracts: Contract[]) {
  let cuts = [];
  for (const contract of contracts) {
    cuts.push({
      target: contract.address,
      action: action.add,
      selectors: Object.keys(contract.interface.functions)
        // .filter((fn) => fn != 'init()')
        .map((fn) => contract.interface.getSighash(fn)),
    });
  }
  return cuts as IFacetCut[];
}

export const costOf = {
  createPkg: parseEther('0.001'),
  createClient: parseEther('0.01'),
  install: parseEther('0.0001'),
};
