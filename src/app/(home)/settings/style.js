import styled from 'styled-components'

export const Container = styled.div`
  flex-direction: column;
`

export const Select = styled.select`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1rem;
  `
export const Option = styled.option`
  font-size: 1rem;
`
export const ActivatedFunctionsBlock = styled.div`
  flex-wrap: wrap;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 20px 10px;
  gap: 15px;
  `
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`

`
export const ActivatedFunction = styled.div`
  gap: 2px;
`
