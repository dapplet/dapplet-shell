
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { Installer, Installer__factory } from '../types'
const InstallerInterface = new utils.Interface(Installer__factory.abi)


export const useInstaller_create = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Installer, 'create'>(
    contractAddress && new Contract(contractAddress, InstallerInterface) as Installer,
    'create',
    options
  )
}


export const useInstaller_diamondCut = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Installer, 'diamondCut'>(
    contractAddress && new Contract(contractAddress, InstallerInterface) as Installer,
    'diamondCut',
    options
  )
}


export const useInstaller_install = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Installer, 'install'>(
    contractAddress && new Contract(contractAddress, InstallerInterface) as Installer,
    'install',
    options
  )
}


export const useInstaller_uninstall = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Installer, 'uninstall'>(
    contractAddress && new Contract(contractAddress, InstallerInterface) as Installer,
    'uninstall',
    options
  )
}


export const useInstaller_event_DappletUpgrade = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<Installer, 'DappletUpgrade'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, InstallerInterface),
        event: 'DappletUpgrade',
        args: args || [],
      },
    queryParams
  )
}


export const useInstaller_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<Installer, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, InstallerInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const useInstaller_event_OwnershipTransferred = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<Installer, 'OwnershipTransferred'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, InstallerInterface),
        event: 'OwnershipTransferred',
        args: args || [],
      },
    queryParams
  )
}


export const useInstaller = {
  create: useInstaller_create,
  diamondCut: useInstaller_diamondCut,
  install: useInstaller_install,
  uninstall: useInstaller_uninstall,
  events: {
    DappletUpgrade: useInstaller_event_DappletUpgrade,
    DiamondCut: useInstaller_event_DiamondCut,
    OwnershipTransferred: useInstaller_event_OwnershipTransferred
  }
}
