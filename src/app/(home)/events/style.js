import styled from 'styled-components'

export const Container = styled.div`
  overflow: auto;
  flex-direction: column;
`
export const HeaderText = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: .9rem;
  color: ${({ theme }) => theme.primaryFont};
`
export const HeaderSelect = styled.div`
  width: 80px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryFont};
`
export const ContentInlineHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`
export const ContentButton = styled.div`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10px;
`
