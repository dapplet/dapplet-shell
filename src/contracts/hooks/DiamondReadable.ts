
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { DiamondReadable, DiamondReadable__factory } from '../types'
const DiamondReadableInterface = new utils.Interface(DiamondReadable__factory.abi)


export const useDiamondReadable_facetAddress = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DiamondReadable, 'facetAddress'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DiamondReadable, 'facetAddress'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DiamondReadableInterface) as DiamondReadable,
        method: 'facetAddress',
        args
      }, queryParams
  )
}


export const useDiamondReadable_facetAddresses = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DiamondReadable, 'facetAddresses'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DiamondReadable, 'facetAddresses'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DiamondReadableInterface) as DiamondReadable,
        method: 'facetAddresses',
        args
      }, queryParams
  )
}


export const useDiamondReadable_facetFunctionSelectors = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DiamondReadable, 'facetFunctionSelectors'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DiamondReadable, 'facetFunctionSelectors'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DiamondReadableInterface) as DiamondReadable,
        method: 'facetFunctionSelectors',
        args
      }, queryParams
  )
}


export const useDiamondReadable_facets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DiamondReadable, 'facets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DiamondReadable, 'facets'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DiamondReadableInterface) as DiamondReadable,
        method: 'facets',
        args
      }, queryParams
  )
}


export const useDiamondReadable = {
  facetAddress: useDiamondReadable_facetAddress,
  facetAddresses: useDiamondReadable_facetAddresses,
  facetFunctionSelectors: useDiamondReadable_facetFunctionSelectors,
  facets: useDiamondReadable_facets,
  events: {
  
  }
}
