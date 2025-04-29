import styled from 'styled-components'

export const Form = styled.div`
  width: 100%;
  gap: 30;
  padding: 10px;
  flex-direction: column;
`
  export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.secondary};
  padding: 30px 10px;
  justify-content: center;
  align-items: space-between;
  z-index: 5;
`
export const SelectShiftDay = styled.select`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1rem;
  padding: 5;
`
export const OptionShiftDay = styled.option`
`
export const SaveButton = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20;
  background-color: ${({ theme }) => theme.red};
  padding: 10px 20px;
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1rem;
`
export const SaveButtonText = styled.div`
`
export const ContainerCalendar = styled.div`
  padding: 5px;
`
export const Label = styled.div`
  color: ${({ theme }) => theme.secondaryFont};
  font-size: 1rem;
`