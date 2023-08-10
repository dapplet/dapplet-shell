import { shortenAddress } from '@usedapp/core';
import { SlIcon, SlSwitch } from '../../design/shoelace';
import { useDiamond } from '../../lib/hooks';
import { useTheme } from '../../lib/stores';
import Wallet from '../molecules/Wallet';

function Header() {
  const toggleTheme = useTheme((state) => state.toggle);
  const theme = useTheme((state) => state.theme);

  const address = useDiamond();

  return (
    <div className="w-full">
      <div id="header">
        <h1 className="header-title">{shortenAddress(address)}</h1>
        <div className="flex items-center gap-2 flex-">
          <SlSwitch
            className="menu-switch"
            checked={theme === 'dark'}
            onSlChange={toggleTheme}
          />
          <SlIcon name="moon" />
          <Wallet />
        </div>
      </div>
    </div>
  );
}

export default Header;
