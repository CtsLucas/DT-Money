import { EmptyTransactionsContainer } from './styles';

export function EmptyTransactions() {
  return (<EmptyTransactionsContainer>
    <strong>Você ainda não possui transações cadastradas!</strong>
    <span> Faça uma agora mesmo!</span>
  </EmptyTransactionsContainer>);
}
