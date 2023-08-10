
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { IDiamondWritable, IDiamondWritable__factory } from '../types'
const IDiamondWritableInterface = new utils.Interface(IDiamondWritable__factory.abi)


export const useIDiamondWritable_diamondCut = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IDiamondWritable, 'diamondCut'>(
    contractAddress && new Contract(contractAddress, IDiamondWritableInterface) as IDiamondWritable,
    'diamondCut',
    options
  )
}


export const useIDiamondWritable_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<IDiamondWritable, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, IDiamondWritableInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const useIDiamondWritable = {
  diamondCut: useIDiamondWritable_diamondCut,
  events: {
    DiamondCut: useIDiamondWritable_event_DiamondCut
  }
}
