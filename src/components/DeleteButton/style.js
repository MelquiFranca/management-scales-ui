import styled from 'styled-components'

export const Container = styled.button`
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  gap: 5px;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.primaryFont};
`
