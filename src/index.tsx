import { render } from 'react-dom';
import PiralInstance from './components/templates/PiralInstance';
import ThemeProvider from './components/templates/ThemeProvider';

render(
  <ThemeProvider>
    <div id="main">
      <PiralInstance />
    </div>
  </ThemeProvider>,

  document.querySelector('#app')
);
