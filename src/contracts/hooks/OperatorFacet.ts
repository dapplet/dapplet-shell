
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { OperatorFacet, OperatorFacet__factory } from '../types'
const OperatorFacetInterface = new utils.Interface(OperatorFacet__factory.abi)


export const useOperatorFacet_createPkg = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<OperatorFacet, 'createPkg'>(
    contractAddress && new Contract(contractAddress, OperatorFacetInterface) as OperatorFacet,
    'createPkg',
    options
  )
}


export const useOperatorFacet_installPkg = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<OperatorFacet, 'installPkg'>(
    contractAddress && new Contract(contractAddress, OperatorFacetInterface) as OperatorFacet,
    'installPkg',
    options
  )
}


export const useOperatorFacet_model = (
  contractAddress: Falsy | string,
  args: Falsy | Params<OperatorFacet, 'model'>,
  queryParams: QueryParams = {}
) => {
  return useCall<OperatorFacet, 'model'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, OperatorFacetInterface) as OperatorFacet,
        method: 'model',
        args
      }, queryParams
  )
}


export const useOperatorFacet_uninstallPkg = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<OperatorFacet, 'uninstallPkg'>(
    contractAddress && new Contract(contractAddress, OperatorFacetInterface) as OperatorFacet,
    'uninstallPkg',
    options
  )
}


export const useOperatorFacet_event_Approval = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<OperatorFacet, 'Approval'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, OperatorFacetInterface),
        event: 'Approval',
        args: args || [],
      },
    queryParams
  )
}


export const useOperatorFacet_event_ClientUpgraded = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<OperatorFacet, 'ClientUpgraded'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, OperatorFacetInterface),
        event: 'ClientUpgraded',
        args: args || [],
      },
    queryParams
  )
}


export const useOperatorFacet_event_FeePaid = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<OperatorFacet, 'FeePaid'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, OperatorFacetInterface),
        event: 'FeePaid',
        args: args || [],
      },
    queryParams
  )
}


export const useOperatorFacet_event_PackageCreated = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<OperatorFacet, 'PackageCreated'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, OperatorFacetInterface),
        event: 'PackageCreated',
        args: args || [],
      },
    queryParams
  )
}


export const useOperatorFacet_event_RoleAdminChanged = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<OperatorFacet, 'RoleAdminChanged'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, OperatorFacetInterface),
        event: 'RoleAdminChanged',
        args: args || [],
      },
    queryParams
  )
}


export const useOperatorFacet_event_RoleGranted = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<OperatorFacet, 'RoleGranted'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, OperatorFacetInterface),
        event: 'RoleGranted',
        args: args || [],
      },
    queryParams
  )
}


export const useOperatorFacet_event_RoleRevoked = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<OperatorFacet, 'RoleRevoked'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, OperatorFacetInterface),
        event: 'RoleRevoked',
        args: args || [],
      },
    queryParams
  )
}


export const useOperatorFacet_event_Transfer = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<OperatorFacet, 'Transfer'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, OperatorFacetInterface),
        event: 'Transfer',
        args: args || [],
      },
    queryParams
  )
}


export const useOperatorFacet = {
  createPkg: useOperatorFacet_createPkg,
  installPkg: useOperatorFacet_installPkg,
  model: useOperatorFacet_model,
  uninstallPkg: useOperatorFacet_uninstallPkg,
  events: {
    Approval: useOperatorFacet_event_Approval,
    ClientUpgraded: useOperatorFacet_event_ClientUpgraded,
    FeePaid: useOperatorFacet_event_FeePaid,
    PackageCreated: useOperatorFacet_event_PackageCreated,
    RoleAdminChanged: useOperatorFacet_event_RoleAdminChanged,
    RoleGranted: useOperatorFacet_event_RoleGranted,
    RoleRevoked: useOperatorFacet_event_RoleRevoked,
    Transfer: useOperatorFacet_event_Transfer
  }
}
