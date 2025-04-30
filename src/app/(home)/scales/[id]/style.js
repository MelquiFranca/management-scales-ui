import styled from 'styled-components'
export const Container = styled.div`
  gap: 5px;
  padding-bottom: 100px;
  flex-direction: column;
`
export const Select = styled.select`
  marginTop: 5;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primaryFont};
  padding: 5px;
`
export const Options = styled.select`
 
`
export const SeparatorLabel = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  border-top: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
`
export const Label = styled.div`
  color: ${({ theme }) => theme.secondaryFont};
`
export const MembersScaleForm = styled.div`
  gap: 5px;
  flex-direction: column;
`
export const ActionButtonAddMember = styled.div`
  justify-content: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
  padding: 5px 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1.4rem;
`
