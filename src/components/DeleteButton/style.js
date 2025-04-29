import styled from 'styled-components'

export const Container = styled.button`
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  gap: 5px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.red};
`
