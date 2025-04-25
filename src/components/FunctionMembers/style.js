import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
`
export const WrapperIcon = styled.div`
  width: 25;
`
export const WrapperMember = styled.div`
  padding: 5px 0;
  padding-left: 10px;
  justify-content: space-between;
  align-items: center;
`
export const ContentInline = styled.div`
  align-items: center;
  gap: 5;
  justify-content: flex-start;
  flex: 2;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryFont};
`
export const NameText = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.gray};
  font-size: 1rem;
`