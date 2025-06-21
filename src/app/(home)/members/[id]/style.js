import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
`
export const ImageButton = styled.button`
  color: ${({ theme }) => theme.primaryFont};
  position: absolute;
  align-self: flex-end;
  padding: 10px;
  border-radius: 50%;
  right: 30%;
  bottom: 10px;
  background-color: ${({ theme }) => theme.red};
  justify-content: center;
  align-items: center;
`
export const ImageEditor = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 50%;
  height: 160px;
`
export const Photo = styled.div`
  height: 100%;
  width: 160px;
  border-radius: 50%;
  border: 1px solid #55555588;
  content-fit: cover;
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