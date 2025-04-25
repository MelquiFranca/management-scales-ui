import styled from 'styled-components'

export const ContentGroup = styled.div`
  flex-direction: column;
  display: ${({ expanded }) => expanded ? 'flex' : 'none'};
`
export const Container = styled.div`
  flex: 1;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  flex-direction: column;
  overflow: auto;
`
export const Header = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.primaryContrast};
  height: 50;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px 5px 0;
`
export const HeaderItem = styled.div`
  color: ${({ theme }) => theme.primaryFont};
  font-weight: bold;
  padding: 0 10px;
  flex: 3;
  font-size: 1.2rem;
`
export const HeaderButton = styled.button`
  color: ${({ theme }) => theme.primaryFont};
  background-color: ${({ theme }) => theme.secondary};
  width: 30px;
  height: 30px;
  justify-content: center;
`
export const Content = styled.div`
  flex: 1;
  height: 100%;
  padding: 10px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primaryContrast};
`
export const Footer = styled.div`
  padding: 0 10px;
  height: 50px;
  gap: 10px;
  background-color: ${({ theme }) => theme.primaryContrast};
  justify-content: flex-end;
  borderTopWidth: 1;
  borderTopColor: ${({ theme }) => theme.secondary};
  align-items: center;
  border-radius: 0 0 5px;
`
export const EditButton = styled.button`
  background-color: ${({ theme, fullEdit }) => fullEdit ? theme.red : theme.primary};
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  height: 25px;
`
