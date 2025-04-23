'use client'
import styled from "styled-components"
import { COLORS } from "../utils"

export const Field = styled.div`
  background-color: ${COLORS.secondary};
  flex-direction: row;
  align-items: center;
  gap: 10;
`
export const FieldIcon = styled.div`
  width: 40px;
  align-items: center;
  justify-content: flex-start;
`
export const Input = styled.div`
  flex: 1;
  padding: initial 5px;
  border-width: 0 0 2px 0;
  gap: 5;
  border-color: ${COLORS.primary};
  background-color: ${COLORS.secondary};
`
export const Label = styled.div`
  padding: 5px 0;
  color: ${COLORS.primaryFont};
  font-size: 16;
`
export const InputText = styled.input`
  font-size: 16;
  color: ${COLORS.primaryFont};
  background-color: ${COLORS.secondary};
  padding: 2px 0;
  border: none;
  border-bottom: 1px solid ${COLORS.secondaryBorder};
`
export const Image = styled.image`
  color: ${COLORS.red};
`
