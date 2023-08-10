
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { DiamondLoupeFacet, DiamondLoupeFacet__factory } from '../types'
const DiamondLoupeFacetInterface = new utils.Interface(DiamondLoupeFacet__factory.abi)


export const useDiamondLoupeFacet_facetAddress = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DiamondLoupeFacet, 'facetAddress'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DiamondLoupeFacet, 'facetAddress'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DiamondLoupeFacetInterface) as DiamondLoupeFacet,
        method: 'facetAddress',
        args
      }, queryParams
  )
}


export const useDiamondLoupeFacet_facetAddresses = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DiamondLoupeFacet, 'facetAddresses'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DiamondLoupeFacet, 'facetAddresses'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DiamondLoupeFacetInterface) as DiamondLoupeFacet,
        method: 'facetAddresses',
        args
      }, queryParams
  )
}


export const useDiamondLoupeFacet_facetFunctionSelectors = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DiamondLoupeFacet, 'facetFunctionSelectors'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DiamondLoupeFacet, 'facetFunctionSelectors'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DiamondLoupeFacetInterface) as DiamondLoupeFacet,
        method: 'facetFunctionSelectors',
        args
      }, queryParams
  )
}


export const useDiamondLoupeFacet_facets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DiamondLoupeFacet, 'facets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DiamondLoupeFacet, 'facets'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DiamondLoupeFacetInterface) as DiamondLoupeFacet,
        method: 'facets',
        args
      }, queryParams
  )
}


export const useDiamondLoupeFacet = {
  facetAddress: useDiamondLoupeFacet_facetAddress,
  facetAddresses: useDiamondLoupeFacet_facetAddresses,
  facetFunctionSelectors: useDiamondLoupeFacet_facetFunctionSelectors,
  facets: useDiamondLoupeFacet_facets,
  events: {
  
  }
}
