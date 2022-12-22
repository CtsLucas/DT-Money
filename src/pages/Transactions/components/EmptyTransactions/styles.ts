import styled from 'styled-components';

export const EmptyTransactionsContainer = styled.div`
  border-top: solid 1px ${({ theme }) => theme['gray-600']};
  padding-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & > strong {
    font-size: 1.5rem;
  }
`;
