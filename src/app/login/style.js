'use client'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  gap: 30px;
`
export const Image = styled.img`
  flex: 1;
  border: 1px solid red;
  height: 100px;
  width: 100%;
  align-self: center;
  // margin-bottom: 30px;
  // border-radius: 100px;
  border-color: ${({ theme }) => theme.primary};
`
