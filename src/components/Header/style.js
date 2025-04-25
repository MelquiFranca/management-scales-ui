import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  position: fixed:
  top: 0;
  align-items: center;
  gap: 40px;
`
export const ListGroups = styled.select`
  flex: 1;
  background: none;
  padding: 5px 0;
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1.4rem;
  font-weight: bold;
`
export const GroupNameItem = styled.option`
`
