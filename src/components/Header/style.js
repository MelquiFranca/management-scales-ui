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
export const Image = styled.img`
  flex: 1;
  height: 100%;
  width: 100%;
  border-radius: 50%;
`
export const Avatar = styled.button`
  height: 50px;
  width: 50px;
  background: none;
`

