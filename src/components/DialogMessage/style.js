import styled from 'styled-components'

export const Container = styled.div`
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 10px;
`
export const ContentMessages =  styled.div`
  flex: 4;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 10px;
  overflow: auto;
`
export const InputText = styled.input`
  flex: 1;
  border-radius: 15px;
  padding: 15px;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryFont};
`
export const SendButton = styled.button`
  display: flex;
  padding: 8px;
  height: 45px;
  width: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryFont};
`
export const CloseButton = styled.button`
  padding: 5px 10px;
  height: 35px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.primaryFont};
`
export const ContainerActions = styled.div`
  width: 100%;
  padding: 15px;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
`
export const Message = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 10px 14px;
  border-radius: 15px;
  line-height: 1.4;
`
export const SplitDate = styled.div`
  align-self: center;
  background-color: ${({ theme }) => theme.dark};
  padding: 6px;
  color: ${({ theme }) => theme.primaryFont};
  font-size: .7rem;
  border-radius: 15px;
`
