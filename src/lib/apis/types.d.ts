export interface DappletDevApi {
  dev(config): void;
}
declare module 'piral-core/lib/types/custom' {
  interface PiletCustomApi extends DappletDevApi {}
}
