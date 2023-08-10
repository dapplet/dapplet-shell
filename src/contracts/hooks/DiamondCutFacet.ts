
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { DiamondCutFacet, DiamondCutFacet__factory } from '../types'
const DiamondCutFacetInterface = new utils.Interface(DiamondCutFacet__factory.abi)


export const useDiamondCutFacet_diamondCut = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<DiamondCutFacet, 'diamondCut'>(
    contractAddress && new Contract(contractAddress, DiamondCutFacetInterface) as DiamondCutFacet,
    'diamondCut',
    options
  )
}


export const useDiamondCutFacet_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DiamondCutFacet, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DiamondCutFacetInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const useDiamondCutFacet_event_OwnershipTransferred = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DiamondCutFacet, 'OwnershipTransferred'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DiamondCutFacetInterface),
        event: 'OwnershipTransferred',
        args: args || [],
      },
    queryParams
  )
}


export const useDiamondCutFacet = {
  diamondCut: useDiamondCutFacet_diamondCut,
  events: {
    DiamondCut: useDiamondCutFacet_event_DiamondCut,
    OwnershipTransferred: useDiamondCutFacet_event_OwnershipTransferred
  }
}
