
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { IPKG, IPKG__factory } from '../types'
const IPKGInterface = new utils.Interface(IPKG__factory.abi)


export const useIPKG_get = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'get'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'get'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'get',
        args
      }, queryParams
  )
}


export const useIPKG_set = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IPKG, 'set'>(
    contractAddress && new Contract(contractAddress, IPKGInterface) as IPKG,
    'set',
    options
  )
}


export const useIPKG = {
  get: useIPKG_get,
  set: useIPKG_set,
  events: {
  
  }
}
