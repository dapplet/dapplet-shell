export interface urlParams {
  prefix: string;
  suffix: string;
}

export interface IDeployment {
  [key: string]: {
    address: string;
    abi?: any | null;
    cid?: string;
  };
}
export interface IDeployments {
  [key: number]: IDeployment;
}

export interface IFacetCut {
  target: string;
  action: number;
  selectors: string[];
}

export interface IPKGCUT {
  cuts: IFacetCut[];
  target: string;
  selector: string;
}

export interface urlParams {
  prefix: string;
  suffix: string;
}

export interface IContract {
  name: string;
  address: string;
}

export interface NamedInitializer {
  [key: string]: LocalInitializer;
}

export interface LocalInitializer {
  abi: any;
  bytecode: string;
  function: string;
  constructorArgs?: any[];
  defaultArgs?: any[];
}

export interface NamedFacet {
  [key: string]: LocalFacet;
}

export interface LocalFacet {
  abi: any;
  bytecode: string;
  functions: string[];
  constructorArgs?: any[];
}
