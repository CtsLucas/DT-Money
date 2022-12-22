import styled from 'styled-components';

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionContent = styled.div`
  overflow: auto;
  margin-top: 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme['gray-700']};

    &:first-child {
      width: 50%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const TransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TransactionsListItem = styled.div`
  width: 100%;
  background: ${({ theme }) => theme['gray-700']};
  padding: 20px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > .content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  & > .footer {
    display: flex;
    justify-content: space-between;

    & > span {
      color: ${({ theme }) => theme['gray-500']};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
    }
  }
`;

interface PriceHighLightProps {
  variant: 'income' | 'outcome';
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${({ variant, theme }) =>
    variant === 'income' ? theme['green-300'] : theme['red-300']};
  font-weight: bold;
`;
