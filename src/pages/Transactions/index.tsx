import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export function Transaction() {
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions');
    const data = await response.json();
    setTransaction(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transaction.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
