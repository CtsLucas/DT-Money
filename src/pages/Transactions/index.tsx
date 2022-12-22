import { useContextSelector } from 'use-context-selector';
import { CalendarBlank, TagSimple } from 'phosphor-react';

import { TransactionsContext } from '../../contexts/TransactionContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';

import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionContent,
  TransactionsTable,
  TransactionsListItem,
  TransactionsList,
} from './styles';

export function Transaction() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const screenWidth = window ? window.screen.width : 0;
  const isMobile = screenWidth ? screenWidth >= 768 : false;

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionContent>
          {isMobile ? (
            <TransactionsTable>
              <tbody>
                {transactions.map((transaction) => {
                  return (
                    <tr key={transaction.id}>
                      <td>{transaction.description}</td>
                      <td>
                        <PriceHighLight variant={transaction.type}>
                          {transaction.type === 'outcome' && '- '}
                          {priceFormatter.format(transaction.price)}
                        </PriceHighLight>
                      </td>
                      <td>{transaction.category}</td>
                      <td>
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </TransactionsTable>
          ) : (
            <TransactionsList>
              {transactions.map((transaction) => {
                return (
                  <TransactionsListItem key={transaction.id}>
                    <div className="content">
                      <span>{transaction.description}</span>
                      <PriceHighLight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighLight>
                    </div>
                    <div className="footer">
                      <span>
                        <TagSimple />
                        {transaction.category}
                      </span>
                      <span>
                        <CalendarBlank />
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </span>
                    </div>
                  </TransactionsListItem>
                );
              })}
            </TransactionsList>
          )}
        </TransactionContent>
      </TransactionsContainer>
    </>
  );
}
