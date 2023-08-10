
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { System, System__factory } from '../types'
const SystemInterface = new utils.Interface(System__factory.abi)


export const useSystem_facetAddress = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'facetAddress'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'facetAddress'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'facetAddress',
        args
      }, queryParams
  )
}


export const useSystem_facetAddresses = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'facetAddresses'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'facetAddresses'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'facetAddresses',
        args
      }, queryParams
  )
}


export const useSystem_facetFunctionSelectors = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'facetFunctionSelectors'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'facetFunctionSelectors'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'facetFunctionSelectors',
        args
      }, queryParams
  )
}


export const useSystem_facets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'facets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'facets'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'facets',
        args
      }, queryParams
  )
}


export const useSystem_supportsInterface = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'supportsInterface'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'supportsInterface'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'supportsInterface',
        args
      }, queryParams
  )
}


export const useSystem_acceptOwnership = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'acceptOwnership'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'acceptOwnership',
    options
  )
}


export const useSystem_nomineeOwner = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'nomineeOwner'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'nomineeOwner'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'nomineeOwner',
        args
      }, queryParams
  )
}


export const useSystem_owner = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'owner'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'owner'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'owner',
        args
      }, queryParams
  )
}


export const useSystem_transferOwnership = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'transferOwnership'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'transferOwnership',
    options
  )
}


export const useSystem_allowance = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'allowance'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'allowance'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'allowance',
        args
      }, queryParams
  )
}


export const useSystem_approve = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'approve'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'approve',
    options
  )
}


export const useSystem_balanceOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'balanceOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'balanceOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'balanceOf',
        args
      }, queryParams
  )
}


export const useSystem_decimals = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'decimals'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'decimals'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'decimals',
        args
      }, queryParams
  )
}


export const useSystem_installedBy = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'installedBy'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'installedBy'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'installedBy',
        args
      }, queryParams
  )
}


export const useSystem_installersOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'installersOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'installersOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'installersOf',
        args
      }, queryParams
  )
}


export const useSystem_isPkg = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'isPkg'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'isPkg'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'isPkg',
        args
      }, queryParams
  )
}


export const useSystem_metadataOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'metadataOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'metadataOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'metadataOf',
        args
      }, queryParams
  )
}


export const useSystem_name = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'name'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'name'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'name',
        args
      }, queryParams
  )
}


export const useSystem_ownedBy = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'ownedBy'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'ownedBy'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'ownedBy',
        args
      }, queryParams
  )
}


export const useSystem_ownerOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'ownerOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'ownerOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'ownerOf',
        args
      }, queryParams
  )
}


export const useSystem_receivedStakeOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'receivedStakeOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'receivedStakeOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'receivedStakeOf',
        args
      }, queryParams
  )
}


export const useSystem_sentStakeOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'sentStakeOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'sentStakeOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'sentStakeOf',
        args
      }, queryParams
  )
}


export const useSystem_stake = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'stake'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'stake',
    options
  )
}


export const useSystem_symbol = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'symbol'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'symbol'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'symbol',
        args
      }, queryParams
  )
}


export const useSystem_totalSupply = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'totalSupply'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'totalSupply'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'totalSupply',
        args
      }, queryParams
  )
}


export const useSystem_transfer = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'transfer'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'transfer',
    options
  )
}


export const useSystem_transferFrom = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'transferFrom'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'transferFrom',
    options
  )
}


export const useSystem_unstake = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'unstake'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'unstake',
    options
  )
}


export const useSystem_createClient = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'createClient'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'createClient',
    options
  )
}


export const useSystem_getClientUpgrade = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'getClientUpgrade'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'getClientUpgrade'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'getClientUpgrade',
        args
      }, queryParams
  )
}


export const useSystem_setClientUpgrade = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'setClientUpgrade'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'setClientUpgrade',
    options
  )
}


export const useSystem_diamondCut = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'diamondCut'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'diamondCut',
    options
  )
}


export const useSystem_createPkg = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'createPkg'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'createPkg',
    options
  )
}


export const useSystem_installPkg = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'installPkg'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'installPkg',
    options
  )
}


export const useSystem_model = (
  contractAddress: Falsy | string,
  args: Falsy | Params<System, 'model'>,
  queryParams: QueryParams = {}
) => {
  return useCall<System, 'model'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, SystemInterface) as System,
        method: 'model',
        args
      }, queryParams
  )
}


export const useSystem_uninstallPkg = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<System, 'uninstallPkg'>(
    contractAddress && new Contract(contractAddress, SystemInterface) as System,
    'uninstallPkg',
    options
  )
}


export const useSystem_event_OwnershipTransferred = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'OwnershipTransferred'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'OwnershipTransferred',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_Approval = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'Approval'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'Approval',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_Stake = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'Stake'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'Stake',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_Transfer = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'Transfer'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'Transfer',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_Unstake = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'Unstake'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'Unstake',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_FeePaid = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'FeePaid'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'FeePaid',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_RoleAdminChanged = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'RoleAdminChanged'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'RoleAdminChanged',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_RoleGranted = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'RoleGranted'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'RoleGranted',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_RoleRevoked = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'RoleRevoked'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'RoleRevoked',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_ClientUpgraded = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'ClientUpgraded'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'ClientUpgraded',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem_event_PackageCreated = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<System, 'PackageCreated'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, SystemInterface),
        event: 'PackageCreated',
        args: args || [],
      },
    queryParams
  )
}


export const useSystem = {
  facetAddress: useSystem_facetAddress,
  facetAddresses: useSystem_facetAddresses,
  facetFunctionSelectors: useSystem_facetFunctionSelectors,
  facets: useSystem_facets,
  supportsInterface: useSystem_supportsInterface,
  acceptOwnership: useSystem_acceptOwnership,
  nomineeOwner: useSystem_nomineeOwner,
  owner: useSystem_owner,
  transferOwnership: useSystem_transferOwnership,
  allowance: useSystem_allowance,
  approve: useSystem_approve,
  balanceOf: useSystem_balanceOf,
  decimals: useSystem_decimals,
  installedBy: useSystem_installedBy,
  installersOf: useSystem_installersOf,
  isPkg: useSystem_isPkg,
  metadataOf: useSystem_metadataOf,
  name: useSystem_name,
  ownedBy: useSystem_ownedBy,
  ownerOf: useSystem_ownerOf,
  receivedStakeOf: useSystem_receivedStakeOf,
  sentStakeOf: useSystem_sentStakeOf,
  stake: useSystem_stake,
  symbol: useSystem_symbol,
  totalSupply: useSystem_totalSupply,
  transfer: useSystem_transfer,
  transferFrom: useSystem_transferFrom,
  unstake: useSystem_unstake,
  createClient: useSystem_createClient,
  getClientUpgrade: useSystem_getClientUpgrade,
  setClientUpgrade: useSystem_setClientUpgrade,
  diamondCut: useSystem_diamondCut,
  createPkg: useSystem_createPkg,
  installPkg: useSystem_installPkg,
  model: useSystem_model,
  uninstallPkg: useSystem_uninstallPkg,
  events: {
    OwnershipTransferred: useSystem_event_OwnershipTransferred,
    Approval: useSystem_event_Approval,
    Stake: useSystem_event_Stake,
    Transfer: useSystem_event_Transfer,
    Unstake: useSystem_event_Unstake,
    FeePaid: useSystem_event_FeePaid,
    RoleAdminChanged: useSystem_event_RoleAdminChanged,
    RoleGranted: useSystem_event_RoleGranted,
    RoleRevoked: useSystem_event_RoleRevoked,
    DiamondCut: useSystem_event_DiamondCut,
    ClientUpgraded: useSystem_event_ClientUpgraded,
    PackageCreated: useSystem_event_PackageCreated
  }
}
