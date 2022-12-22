import { ThemeProvider } from 'styled-components';
import { Transaction } from './pages/Transactions';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/defaut';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Transaction />
    </ThemeProvider>
  );
}
