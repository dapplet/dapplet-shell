
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { Diamond, Diamond__factory } from '../types'
const DiamondInterface = new utils.Interface(Diamond__factory.abi)


export const useDiamond_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<Diamond, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DiamondInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const useDiamond_event_OwnershipTransferred = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<Diamond, 'OwnershipTransferred'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DiamondInterface),
        event: 'OwnershipTransferred',
        args: args || [],
      },
    queryParams
  )
}


export const useDiamond = {
  ,
  events: {
    DiamondCut: useDiamond_event_DiamondCut,
    OwnershipTransferred: useDiamond_event_OwnershipTransferred
  }
}
