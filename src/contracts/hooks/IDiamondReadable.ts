
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { IDiamondReadable, IDiamondReadable__factory } from '../types'
const IDiamondReadableInterface = new utils.Interface(IDiamondReadable__factory.abi)


export const useIDiamondReadable_facetAddress = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IDiamondReadable, 'facetAddress'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IDiamondReadable, 'facetAddress'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, IDiamondReadableInterface) as IDiamondReadable,
        method: 'facetAddress',
        args
      }, queryParams
  )
}


export const useIDiamondReadable_facetAddresses = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IDiamondReadable, 'facetAddresses'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IDiamondReadable, 'facetAddresses'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, IDiamondReadableInterface) as IDiamondReadable,
        method: 'facetAddresses',
        args
      }, queryParams
  )
}


export const useIDiamondReadable_facetFunctionSelectors = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IDiamondReadable, 'facetFunctionSelectors'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IDiamondReadable, 'facetFunctionSelectors'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, IDiamondReadableInterface) as IDiamondReadable,
        method: 'facetFunctionSelectors',
        args
      }, queryParams
  )
}


export const useIDiamondReadable_facets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IDiamondReadable, 'facets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IDiamondReadable, 'facets'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, IDiamondReadableInterface) as IDiamondReadable,
        method: 'facets',
        args
      }, queryParams
  )
}


export const useIDiamondReadable = {
  facetAddress: useIDiamondReadable_facetAddress,
  facetAddresses: useIDiamondReadable_facetAddresses,
  facetFunctionSelectors: useIDiamondReadable_facetFunctionSelectors,
  facets: useIDiamondReadable_facets,
  events: {
  
  }
}
