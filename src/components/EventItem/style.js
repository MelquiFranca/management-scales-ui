import styled from 'styled-components'

export const ContentInline = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  flex: 1;
  padding-left: 10px;
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
export const EditButton = styled.div`
  flex: 1;
  padding: 1px 0;
  width: 100%;
  gap: 5px;
`
