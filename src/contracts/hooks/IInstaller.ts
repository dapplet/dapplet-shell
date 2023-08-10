
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { IInstaller, IInstaller__factory } from '../types'
const IInstallerInterface = new utils.Interface(IInstaller__factory.abi)


export const useIInstaller_create = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IInstaller, 'create'>(
    contractAddress && new Contract(contractAddress, IInstallerInterface) as IInstaller,
    'create',
    options
  )
}


export const useIInstaller_diamondCut = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IInstaller, 'diamondCut'>(
    contractAddress && new Contract(contractAddress, IInstallerInterface) as IInstaller,
    'diamondCut',
    options
  )
}


export const useIInstaller_install = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IInstaller, 'install'>(
    contractAddress && new Contract(contractAddress, IInstallerInterface) as IInstaller,
    'install',
    options
  )
}


export const useIInstaller_uninstall = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IInstaller, 'uninstall'>(
    contractAddress && new Contract(contractAddress, IInstallerInterface) as IInstaller,
    'uninstall',
    options
  )
}


export const useIInstaller_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<IInstaller, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, IInstallerInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const useIInstaller = {
  create: useIInstaller_create,
  diamondCut: useIInstaller_diamondCut,
  install: useIInstaller_install,
  uninstall: useIInstaller_uninstall,
  events: {
    DiamondCut: useIInstaller_event_DiamondCut
  }
}
