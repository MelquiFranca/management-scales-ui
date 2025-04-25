import styled from 'styled-components'

export const Container = styled.button`
  height: ${({ size }) => size || 50}px;
  width: ${({ size }) => size || 50}px;
  background: none;
`
export const Image = styled.img`
  flex: 1;
  height: 100%;
  width: 100%;
  border-radius: 50%;
`