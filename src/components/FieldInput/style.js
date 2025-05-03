'use client'
import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  width: 100%;
`
export const FieldIcon = styled.div`
  align-items: center;
  justify-content: flex-start;
`
export const Input = styled.div`
  flex: 1;
  padding: 0 5px;
  gap: 5px;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondary};
`
export const Label = styled.div`
  padding: 5px 0;
  min-width: 50px;
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1rem;
  font-weight: bold;
`
export const InputText = styled.input`
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryFont};
  background-color: ${({ theme }) => theme.secondary};
  padding: 2px 0;
  border: none;
`
export const Image = styled.img`
  color: ${({ theme }) => theme.red};
  width: 40px;
`
export const Separator = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.primary};
`
