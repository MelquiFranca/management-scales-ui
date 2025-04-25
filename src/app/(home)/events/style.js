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
export const ContentInline = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  flex: 1;
  padding-left: 10px;
`
export const ContentInlineHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`
export const ContentText = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1rem;
  padding: 10px 0;
  justify-content: center;
`
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  align-items: center;
  justify-self: flex-start;
  height: 20px;
`
export const ContentButton = styled.div`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10px;
`
export const EditButton = styled.div`
  flex: 1;
  padding: 1px 0;
  width: 100%;
  gap: 5px;
`