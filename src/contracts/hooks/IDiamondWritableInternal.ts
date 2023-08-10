
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { IDiamondWritableInternal, IDiamondWritableInternal__factory } from '../types'
const IDiamondWritableInternalInterface = new utils.Interface(IDiamondWritableInternal__factory.abi)


export const useIDiamondWritableInternal_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<IDiamondWritableInternal, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, IDiamondWritableInternalInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const useIDiamondWritableInternal = {
  ,
  events: {
    DiamondCut: useIDiamondWritableInternal_event_DiamondCut
  }
}
