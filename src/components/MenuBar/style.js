'use client'
import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  gap: 2px;
  background-color: ${({ theme }) => theme.secondary};
  border-top: 1px solid ${({ theme }) => theme.primary};
`
export const Button = styled.button`
  flex: 1;
  padding: 20px;
  background: ${({ activatedMenu, theme }) => activatedMenu ? `${theme.primary}55` : 'none'};
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1rem;
  display: flex;
  flex-direction: column;
`
export const ButtonIcon = styled.button`
  flex: 1;
  padding: 10px;
`