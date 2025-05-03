import styled from 'styled-components'

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  border-top: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
`
export const Label = styled.div`
  color: ${({ theme }) => theme.secondaryFont};
`
