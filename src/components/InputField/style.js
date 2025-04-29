import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
export const Icon = styled.div`
  width: 40px;
  align-items: center;
  justify-content: flex-start;
`
export const Input = styled.div`
  flex: 1;
  padding: 2px 5px;
  gap: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
`
export const Label = styled.div`
  padding: 5px 0;
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1.4rem;
`
export const InputText = styled.input`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.primaryFont};
  padding: 2px 0;
`