import styled from 'styled-components'

export const SaveButton = styled.button`
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.red};
  padding: 10px 20px;
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1.2rem;
`
export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.primary};
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`