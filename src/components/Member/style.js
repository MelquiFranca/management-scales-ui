import styled from 'styled-components'

export const Image = styled.img`
  width: fit-content;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-size: cover;
  background-color: ${({ theme }) => theme.primary};
`
export const Container = styled.div`
  align-items: center;
  align-content: center;
  text-align: center;
  gap: 10px;
  padding: 5px;
  border-radius: 5px;
  flex: 1;
  color: ${({ theme }) => theme.gray};
  font-size: 16;
`
export const Name = styled.div`
  font-size: 1rem;
`