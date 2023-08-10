
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { PKG, PKG__factory } from '../types'
const PKGInterface = new utils.Interface(PKG__factory.abi)


export const usePKG_asset = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'asset'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'asset'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'asset',
        args
      }, queryParams
  )
}


export const usePKG_balanceOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'balanceOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'balanceOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'balanceOf',
        args
      }, queryParams
  )
}


export const usePKG_convertToAssets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'convertToAssets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'convertToAssets'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'convertToAssets',
        args
      }, queryParams
  )
}


export const usePKG_convertToShares = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'convertToShares'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'convertToShares'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'convertToShares',
        args
      }, queryParams
  )
}


export const usePKG_deposit = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'deposit'>(
    contractAddress && new Contract(contractAddress, PKGInterface) as PKG,
    'deposit',
    options
  )
}


export const usePKG_get = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'get'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'get'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'get',
        args
      }, queryParams
  )
}


export const usePKG_maxDeposit = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'maxDeposit'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'maxDeposit'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'maxDeposit',
        args
      }, queryParams
  )
}


export const usePKG_maxMint = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'maxMint'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'maxMint'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'maxMint',
        args
      }, queryParams
  )
}


export const usePKG_maxRedeem = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'maxRedeem'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'maxRedeem'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'maxRedeem',
        args
      }, queryParams
  )
}


export const usePKG_maxWithdraw = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'maxWithdraw'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'maxWithdraw'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'maxWithdraw',
        args
      }, queryParams
  )
}


export const usePKG_mint = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'mint'>(
    contractAddress && new Contract(contractAddress, PKGInterface) as PKG,
    'mint',
    options
  )
}


export const usePKG_pkg = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'pkg'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'pkg'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'pkg',
        args
      }, queryParams
  )
}


export const usePKG_previewDeposit = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'previewDeposit'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'previewDeposit'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'previewDeposit',
        args
      }, queryParams
  )
}


export const usePKG_previewMint = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'previewMint'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'previewMint'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'previewMint',
        args
      }, queryParams
  )
}


export const usePKG_previewRedeem = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'previewRedeem'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'previewRedeem'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'previewRedeem',
        args
      }, queryParams
  )
}


export const usePKG_previewWithdraw = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'previewWithdraw'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'previewWithdraw'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'previewWithdraw',
        args
      }, queryParams
  )
}


export const usePKG_redeem = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'redeem'>(
    contractAddress && new Contract(contractAddress, PKGInterface) as PKG,
    'redeem',
    options
  )
}


export const usePKG_set = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'set'>(
    contractAddress && new Contract(contractAddress, PKGInterface) as PKG,
    'set',
    options
  )
}


export const usePKG_totalAssets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'totalAssets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'totalAssets'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'totalAssets',
        args
      }, queryParams
  )
}


export const usePKG_totalSupply = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'totalSupply'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'totalSupply'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'totalSupply',
        args
      }, queryParams
  )
}


export const usePKG_withdraw = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'withdraw'>(
    contractAddress && new Contract(contractAddress, PKGInterface) as PKG,
    'withdraw',
    options
  )
}


export const usePKG_event_Approval = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<PKG, 'Approval'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, PKGInterface),
        event: 'Approval',
        args: args || [],
      },
    queryParams
  )
}


export const usePKG_event_Deposit = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<PKG, 'Deposit'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, PKGInterface),
        event: 'Deposit',
        args: args || [],
      },
    queryParams
  )
}


export const usePKG_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<PKG, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, PKGInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const usePKG_event_Transfer = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<PKG, 'Transfer'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, PKGInterface),
        event: 'Transfer',
        args: args || [],
      },
    queryParams
  )
}


export const usePKG_event_Withdraw = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<PKG, 'Withdraw'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, PKGInterface),
        event: 'Withdraw',
        args: args || [],
      },
    queryParams
  )
}


export const usePKG = {
  asset: usePKG_asset,
  balanceOf: usePKG_balanceOf,
  convertToAssets: usePKG_convertToAssets,
  convertToShares: usePKG_convertToShares,
  deposit: usePKG_deposit,
  get: usePKG_get,
  maxDeposit: usePKG_maxDeposit,
  maxMint: usePKG_maxMint,
  maxRedeem: usePKG_maxRedeem,
  maxWithdraw: usePKG_maxWithdraw,
  mint: usePKG_mint,
  pkg: usePKG_pkg,
  previewDeposit: usePKG_previewDeposit,
  previewMint: usePKG_previewMint,
  previewRedeem: usePKG_previewRedeem,
  previewWithdraw: usePKG_previewWithdraw,
  redeem: usePKG_redeem,
  set: usePKG_set,
  totalAssets: usePKG_totalAssets,
  totalSupply: usePKG_totalSupply,
  withdraw: usePKG_withdraw,
  events: {
    Approval: usePKG_event_Approval,
    Deposit: usePKG_event_Deposit,
    DiamondCut: usePKG_event_DiamondCut,
    Transfer: usePKG_event_Transfer,
    Withdraw: usePKG_event_Withdraw
  }
}
