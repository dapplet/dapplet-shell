
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { DappletsFacet, DappletsFacet__factory } from '../types'
const DappletsFacetInterface = new utils.Interface(DappletsFacet__factory.abi)


export const useDappletsFacet_allowance = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'allowance'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'allowance'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'allowance',
        args
      }, queryParams
  )
}


export const useDappletsFacet_approve = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<DappletsFacet, 'approve'>(
    contractAddress && new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
    'approve',
    options
  )
}


export const useDappletsFacet_balanceOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'balanceOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'balanceOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'balanceOf',
        args
      }, queryParams
  )
}


export const useDappletsFacet_decimals = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'decimals'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'decimals'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'decimals',
        args
      }, queryParams
  )
}


export const useDappletsFacet_installedBy = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'installedBy'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'installedBy'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'installedBy',
        args
      }, queryParams
  )
}


export const useDappletsFacet_installersOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'installersOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'installersOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'installersOf',
        args
      }, queryParams
  )
}


export const useDappletsFacet_isPkg = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'isPkg'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'isPkg'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'isPkg',
        args
      }, queryParams
  )
}


export const useDappletsFacet_metadataOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'metadataOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'metadataOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'metadataOf',
        args
      }, queryParams
  )
}


export const useDappletsFacet_name = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'name'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'name'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'name',
        args
      }, queryParams
  )
}


export const useDappletsFacet_ownedBy = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'ownedBy'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'ownedBy'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'ownedBy',
        args
      }, queryParams
  )
}


export const useDappletsFacet_ownerOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'ownerOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'ownerOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'ownerOf',
        args
      }, queryParams
  )
}


export const useDappletsFacet_receivedStakeOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'receivedStakeOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'receivedStakeOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'receivedStakeOf',
        args
      }, queryParams
  )
}


export const useDappletsFacet_sentStakeOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'sentStakeOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'sentStakeOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'sentStakeOf',
        args
      }, queryParams
  )
}


export const useDappletsFacet_stake = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<DappletsFacet, 'stake'>(
    contractAddress && new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
    'stake',
    options
  )
}


export const useDappletsFacet_symbol = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'symbol'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'symbol'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'symbol',
        args
      }, queryParams
  )
}


export const useDappletsFacet_totalSupply = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappletsFacet, 'totalSupply'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappletsFacet, 'totalSupply'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
        method: 'totalSupply',
        args
      }, queryParams
  )
}


export const useDappletsFacet_transfer = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<DappletsFacet, 'transfer'>(
    contractAddress && new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
    'transfer',
    options
  )
}


export const useDappletsFacet_transferFrom = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<DappletsFacet, 'transferFrom'>(
    contractAddress && new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
    'transferFrom',
    options
  )
}


export const useDappletsFacet_unstake = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<DappletsFacet, 'unstake'>(
    contractAddress && new Contract(contractAddress, DappletsFacetInterface) as DappletsFacet,
    'unstake',
    options
  )
}


export const useDappletsFacet_event_Approval = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappletsFacet, 'Approval'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface),
        event: 'Approval',
        args: args || [],
      },
    queryParams
  )
}


export const useDappletsFacet_event_Stake = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappletsFacet, 'Stake'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface),
        event: 'Stake',
        args: args || [],
      },
    queryParams
  )
}


export const useDappletsFacet_event_Transfer = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappletsFacet, 'Transfer'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface),
        event: 'Transfer',
        args: args || [],
      },
    queryParams
  )
}


export const useDappletsFacet_event_Unstake = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappletsFacet, 'Unstake'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappletsFacetInterface),
        event: 'Unstake',
        args: args || [],
      },
    queryParams
  )
}


export const useDappletsFacet = {
  allowance: useDappletsFacet_allowance,
  approve: useDappletsFacet_approve,
  balanceOf: useDappletsFacet_balanceOf,
  decimals: useDappletsFacet_decimals,
  installedBy: useDappletsFacet_installedBy,
  installersOf: useDappletsFacet_installersOf,
  isPkg: useDappletsFacet_isPkg,
  metadataOf: useDappletsFacet_metadataOf,
  name: useDappletsFacet_name,
  ownedBy: useDappletsFacet_ownedBy,
  ownerOf: useDappletsFacet_ownerOf,
  receivedStakeOf: useDappletsFacet_receivedStakeOf,
  sentStakeOf: useDappletsFacet_sentStakeOf,
  stake: useDappletsFacet_stake,
  symbol: useDappletsFacet_symbol,
  totalSupply: useDappletsFacet_totalSupply,
  transfer: useDappletsFacet_transfer,
  transferFrom: useDappletsFacet_transferFrom,
  unstake: useDappletsFacet_unstake,
  events: {
    Approval: useDappletsFacet_event_Approval,
    Stake: useDappletsFacet_event_Stake,
    Transfer: useDappletsFacet_event_Transfer,
    Unstake: useDappletsFacet_event_Unstake
  }
}
