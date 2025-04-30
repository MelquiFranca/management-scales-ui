'use client'
import styled from 'styled-components'

export const ViewContent = styled.div`
  padding: 10px 0;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.secondary};
  flex: 1;
  ${({ allDisplay }) => allDisplay && 'z-index: 25;'}
`
