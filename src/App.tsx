import { ThemeProvider } from 'styled-components';
import { TransactionsProvider } from './contexts/TransactionContext';
import { Transaction } from './pages/Transactions';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/defaut';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
