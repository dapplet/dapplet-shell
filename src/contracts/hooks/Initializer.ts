
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { Initializer, Initializer__factory } from '../types'
const InitializerInterface = new utils.Interface(Initializer__factory.abi)


export const useInitializer_cost = (
  contractAddress: Falsy | string,
  args: Falsy | Params<Initializer, 'cost'>,
  queryParams: QueryParams = {}
) => {
  return useCall<Initializer, 'cost'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, InitializerInterface) as Initializer,
        method: 'cost',
        args
      }, queryParams
  )
}


export const useInitializer_init = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Initializer, 'init'>(
    contractAddress && new Contract(contractAddress, InitializerInterface) as Initializer,
    'init',
    options
  )
}


export const useInitializer_owner = (
  contractAddress: Falsy | string,
  args: Falsy | Params<Initializer, 'owner'>,
  queryParams: QueryParams = {}
) => {
  return useCall<Initializer, 'owner'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, InitializerInterface) as Initializer,
        method: 'owner',
        args
      }, queryParams
  )
}


export const useInitializer = {
  cost: useInitializer_cost,
  init: useInitializer_init,
  owner: useInitializer_owner,
  events: {
  
  }
}
