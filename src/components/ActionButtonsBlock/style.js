import styled from "styled-components"

export const SaveButton = styled.button`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.red};
  padding: 10px 20px;
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1.4rem;
`
export const Container = styled.div`
  padding: 10;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`