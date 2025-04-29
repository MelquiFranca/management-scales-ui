import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondary};
  gap: 4px;
`
export const WrapperMember = styled.div`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
`