import styled from "styled-components"

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondary};
  width: 100vw;
  height: 100vh;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 15;
  padding: 20px 0;
  top: 0;
`
export const Title = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.secondaryFont};
  font-size: 1.4rem;
`
export const Message = styled.div`
  flex: 3;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryFont};
  text-align: center;
`
export const Actions = styled.div`
`
export const ButtonClose = styled.button`
  padding: 20px 30px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.gray};
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.secondaryFont};
`