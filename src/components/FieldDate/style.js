import styled from 'styled-components'

export const Container = styled.button`
  padding: 5px;
  background-color: ${({ theme }) => theme.secondary};
`
export const Label = styled.div`
  color: ${({ theme }) => theme.secondaryFont};
  font-size: 1rem;
`