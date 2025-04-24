'use client'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 20px;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  height: 100dvh;
`
export const Image = styled.image`
  flex: 1;
  border: 1px solid red;
  height: 640px;
  width: 640px;
  align-self: center;
  // margin-bottom: 30px;
  // border-radius: 100px;
  border-color: ${({ theme }) => theme.primary};
`
