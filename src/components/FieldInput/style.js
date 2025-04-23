'use client'
import styled from "styled-components"
import { COLORS } from "../utils"

export const Container = styled.div`
  background-color: ${COLORS.secondary};
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
export const FieldIcon = styled.div`
  align-items: center;
  justify-content: flex-start;
`
export const Input = styled.div`
  flex: 1;
  padding: 0 5px;
  border-width: 0 0 2px 0;
  gap: 5px;
  justify-content: flex-start;
  border-color: ${COLORS.primary};
  background-color: ${COLORS.secondary};
`
export const Label = styled.div`
  padding: 5px 0;
  min-width: 50px;
  color: ${COLORS.primaryFont};
  font-size: 1rem;
`
export const InputText = styled.input`
  font-size: 1rem;
  color: ${COLORS.primaryFont};
  background-color: ${COLORS.secondary};
  padding: 2px 0;
  border: none;
  border-bottom: 1px solid ${COLORS.secondaryBorder};
`
export const Image = styled.image`
  color: ${COLORS.red};
  width: 40px;
`
