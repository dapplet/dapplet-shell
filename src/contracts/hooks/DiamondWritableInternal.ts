
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { DiamondWritableInternal, DiamondWritableInternal__factory } from '../types'
const DiamondWritableInternalInterface = new utils.Interface(DiamondWritableInternal__factory.abi)


export const useDiamondWritableInternal_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DiamondWritableInternal, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DiamondWritableInternalInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const useDiamondWritableInternal = {
  ,
  events: {
    DiamondCut: useDiamondWritableInternal_event_DiamondCut
  }
}
