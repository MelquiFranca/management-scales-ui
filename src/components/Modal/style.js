import styled from "styled-components"
import { COLORS } from "../utils"

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  background-color: ${COLORS.secondary};
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 10;
  padding: 20px 0;
`
export const Title = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: ${COLORS.secondaryFont};
  font-size: 1.6rem;
`
export const Message = styled.div`
  flex: 3;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${COLORS.primaryFont};
  text-align: center;
`
export const Actions = styled.div`
`
export const ButtonClose = styled.button`
  padding: 20px 30px;
  border: none;
  border-radius: 10;
  border-color: ${COLORS.gray};
  justify-content: center;
  align-items: center;
  color: ${COLORS.secondaryFont};
`