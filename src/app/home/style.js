'use client'
import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100dvh;
  padding: 8px;
  background-color: ${({ theme }) => theme.secondary};
  flex-direction: column;
  color: ${({ theme }) => theme.primaryFont};
`
