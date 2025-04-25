import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.secondary};
  gap: 2px;
`
export const WrapperMember = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
`