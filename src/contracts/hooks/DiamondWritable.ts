
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { DiamondWritable, DiamondWritable__factory } from '../types'
const DiamondWritableInterface = new utils.Interface(DiamondWritable__factory.abi)


export const useDiamondWritable_diamondCut = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<DiamondWritable, 'diamondCut'>(
    contractAddress && new Contract(contractAddress, DiamondWritableInterface) as DiamondWritable,
    'diamondCut',
    options
  )
}


export const useDiamondWritable_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DiamondWritable, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DiamondWritableInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const useDiamondWritable_event_OwnershipTransferred = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DiamondWritable, 'OwnershipTransferred'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DiamondWritableInterface),
        event: 'OwnershipTransferred',
        args: args || [],
      },
    queryParams
  )
}


export const useDiamondWritable = {
  diamondCut: useDiamondWritable_diamondCut,
  events: {
    DiamondCut: useDiamondWritable_event_DiamondCut,
    OwnershipTransferred: useDiamondWritable_event_OwnershipTransferred
  }
}
