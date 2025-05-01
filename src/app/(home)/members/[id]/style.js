import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  width: 100%;
`
export const ImageButton = styled.button`
  color: ${({ theme }) => theme.primaryFont};
  position: absolute;
  align-self: flex-end;
  padding: 10px;
  border-radius: 50px;
  right: 10px;
  background-color: ${({ theme }) => theme.red};
  justify-content: center;
  align-items: center;
`
export const ImageButtonNew = styled.button`
  flex: 1;
  padding: 5px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.primaryFont};
  justify-content: center;
  align-items: center;
`
export const ImageEditor = styled.div`
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 140px;
`
export const Photo = styled.div`
  height: 100%;
  width: 140px;
  border-radius: 100px;
`
export const actions = styled.div`
  justify-content: flex-end;
`
export const Select = styled.select`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primaryFont};
`
export const Option = styled.option`

`