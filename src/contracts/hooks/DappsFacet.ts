
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { DappsFacet, DappsFacet__factory } from '../types'
const DappsFacetInterface = new utils.Interface(DappsFacet__factory.abi)


export const useDappsFacet_createClient = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<DappsFacet, 'createClient'>(
    contractAddress && new Contract(contractAddress, DappsFacetInterface) as DappsFacet,
    'createClient',
    options
  )
}


export const useDappsFacet_getClientUpgrade = (
  contractAddress: Falsy | string,
  args: Falsy | Params<DappsFacet, 'getClientUpgrade'>,
  queryParams: QueryParams = {}
) => {
  return useCall<DappsFacet, 'getClientUpgrade'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, DappsFacetInterface) as DappsFacet,
        method: 'getClientUpgrade',
        args
      }, queryParams
  )
}


export const useDappsFacet_setClientUpgrade = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<DappsFacet, 'setClientUpgrade'>(
    contractAddress && new Contract(contractAddress, DappsFacetInterface) as DappsFacet,
    'setClientUpgrade',
    options
  )
}


export const useDappsFacet_event_Approval = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappsFacet, 'Approval'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappsFacetInterface),
        event: 'Approval',
        args: args || [],
      },
    queryParams
  )
}


export const useDappsFacet_event_FeePaid = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappsFacet, 'FeePaid'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappsFacetInterface),
        event: 'FeePaid',
        args: args || [],
      },
    queryParams
  )
}


export const useDappsFacet_event_OwnershipTransferred = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappsFacet, 'OwnershipTransferred'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappsFacetInterface),
        event: 'OwnershipTransferred',
        args: args || [],
      },
    queryParams
  )
}


export const useDappsFacet_event_RoleAdminChanged = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappsFacet, 'RoleAdminChanged'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappsFacetInterface),
        event: 'RoleAdminChanged',
        args: args || [],
      },
    queryParams
  )
}


export const useDappsFacet_event_RoleGranted = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappsFacet, 'RoleGranted'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappsFacetInterface),
        event: 'RoleGranted',
        args: args || [],
      },
    queryParams
  )
}


export const useDappsFacet_event_RoleRevoked = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappsFacet, 'RoleRevoked'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappsFacetInterface),
        event: 'RoleRevoked',
        args: args || [],
      },
    queryParams
  )
}


export const useDappsFacet_event_Transfer = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<DappsFacet, 'Transfer'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, DappsFacetInterface),
        event: 'Transfer',
        args: args || [],
      },
    queryParams
  )
}


export const useDappsFacet = {
  createClient: useDappsFacet_createClient,
  getClientUpgrade: useDappsFacet_getClientUpgrade,
  setClientUpgrade: useDappsFacet_setClientUpgrade,
  events: {
    Approval: useDappsFacet_event_Approval,
    FeePaid: useDappsFacet_event_FeePaid,
    OwnershipTransferred: useDappsFacet_event_OwnershipTransferred,
    RoleAdminChanged: useDappsFacet_event_RoleAdminChanged,
    RoleGranted: useDappsFacet_event_RoleGranted,
    RoleRevoked: useDappsFacet_event_RoleRevoked,
    Transfer: useDappsFacet_event_Transfer
  }
}
