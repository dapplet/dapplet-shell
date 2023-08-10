import { Sepolia } from '@usedapp/core';
import { useGlobalState } from 'piral-core';
import { deployment } from '../../contracts';
import { useLocalStorage } from '../../lib/hooks/useLocalStorage';

export default function DappletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const local_dapplet_config = useGlobalState(
    (s) => s.data['local_dapplet_config']
  );

  const config =
    local_dapplet_config?.value &&
    JSON.parse(local_dapplet_config?.value?.replace(/\\"/g, '"'));

  const diamondAddr = deployment('Diamond', Sepolia.chainId)?.address;

  const client_key = 'local_dapplet_client';
  const [, setLocalClient, getLocalClient] = useLocalStorage(client_key);

  return <div>{children}</div>;
}
