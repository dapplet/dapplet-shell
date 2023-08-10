import type { PiralPlugin } from 'piral-core';
import type { DappletDevApi } from './types';

export function createDappletDevApi(): PiralPlugin<DappletDevApi> {
  return (context) => ({
    dev(config: string) {
      if (process.env.NODE_ENV === 'development' && config) {
        localStorage.setItem('DAPPLET_CONFIG', config);
        sessionStorage.setItem('dbg:load-pilets', 'on');
      }
    },
  });
}
