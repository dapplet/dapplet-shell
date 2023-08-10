import { NodeUrls } from '@usedapp/core';
import { ethers } from 'ethers';
import { getAddress } from 'ethers/lib/utils';
import { deployment } from '../../contracts';
import { DappletsFacet__factory } from '../../contracts/types';
import { config } from '../../lib/config';
import { gateways } from '../constants/gateways';

const forking = false;

export async function fetchFirstAvailable(cid: string, file?: string) {
  for (const schema of gateways) {
    let url;
    if (file) {
      url = `${schema.prefix}${cid}${schema.suffix}/${file}`;
    } else {
      url = `${schema.prefix}${cid}${schema.suffix}`;
    }
    try {
      const response = await fetch(url);
      if (response.ok) {
        const res = await response.json();
        return { res, schema };
      }
    } catch {
      console.error(`Fetch stopped: ${url}`);
    }
  }
  return { res: null, schema: null };
}

export async function getPilets() {
  const url = (config.readOnlyUrls as NodeUrls)[
    config.readOnlyChainId as keyof NodeUrls
  ] as string;

  const provider = new ethers.providers.JsonRpcProvider(url);
  console.log('provider', provider);
  const chainId = await provider.getNetwork().then((res) => {
    return res.chainId;
  });
  console.log('chainId', chainId);

  const client = getDiamond();
  console.log('client', client);

  // declare contract
  const dappletsfacet = new ethers.Contract(
    deployment('Diamond', chainId).address,
    DappletsFacet__factory.abi,
    provider
  );

  // // get installed packages from events
  const pkgs = await dappletsfacet.installedBy(client);
  console.log('pkgs', pkgs);

  // get metadata of packages
  const metadataOf = (await dappletsfacet.metadataOf(pkgs)) as string[];

  // if the env is development, push assistant pilet cid to metadata array
  let metadata = metadataOf;
  if (process.env.NODE_ENV === 'development') {
    metadata = [
      'bafkreihtsu2654ahqknczwsjdoa6r7rj6wxvhxs2m7thd7e55cf7k6akn4',
    ].concat(metadataOf);
  }

  console.log('metadata', metadata);

  // fetch pilets
  const pilets = await Promise.all(
    metadata.map(async (meta: string) => {
      if (meta != '') {
        const { res: pilet, schema: url } = await fetchFirstAvailable(meta);

        if (pilet) {
          pilet.spec = pilet.type; //delete later
          pilet.link = `${url?.prefix}${pilet.link}${url?.suffix}/dist/index.js`;

          console.log('pilet found', pilet);
          return pilet;
        } else {
          console.log('pilet not found');
          return null;
        }
      } else {
        console.log('pilet not found');
        return null;
      }
    })
  );

  return pilets.length === 0 ? [] : pilets;
}

export function getDiamond() {
  const subdomain = window.location.hostname.split('.')[0];
  if (subdomain === 'localhost' || subdomain === '127')
    return ethers.constants.AddressZero;
  return getAddress(subdomain);
}

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

//deploy new system (for localhost only)

// import contracts as a node package @dapplet/contracts

// insert into getPilets()
// if !(NODE_ENV === 'production') && any address under deployments[31337] is invalid, run deploySystem()
