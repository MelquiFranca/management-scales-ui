import styled from 'styled-components'
import { COLORS } from '../utils'

export const Container = styled.div`
  position: absolute;
  padding: 30px;
  top: 30%;
  left: 5%;
  width: 90%;
  height: 300px;
  background-color: ${COLORS.primary};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-color: ${COLORS.primaryFont};
`
export const Title = styled.div`
  flex: 1;
  justify-content: center;
  color: ${COLORS.primaryFont};
  font-size: 1.4rem;
  font-weight: bold;
`
export const Message = styled.div`
  justify-content: center;
  color: ${COLORS.primaryFont};
  font-size: 1rem;
  text-align: center;
`
export const GroupButtonAction = styled.div`
  flex: 1;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
`
export const ActionButtonConfirm = styled.div`
  background-color: ${COLORS.red};
  padding: 10px 20px;
  text-align: center;
  color: ${COLORS.primaryFont};
`
export const ActionButtonCancel = styled.div`
  background-color: ${COLORS.secondary};
  padding: 10px 20px;
  text-align: center;
  color: ${COLORS.primaryFont};
`