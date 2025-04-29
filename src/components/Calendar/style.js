import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  flex-direction: column;
`
export const Title = styled.div`
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 1.6rem;
  font-weight: bold;
`
export const Calendar = styled.div`
  flex: 5;
  justify-content: center;
  flex-direction: column;
`
export const Content = styled.div`
  gap: 2px;
  align-self: center;
  flex-direction: column;
  padding-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.primary};
`
export const Actions = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 60px;
`
export const ActionButtonConfirm = styled.div`
  background-color: ${({ theme }) => theme.red};
  padding: 10px 20px;
  color: ${({ theme }) => theme.primaryFont};
  justify-content: center;
  flex: 1;
`
export const ActionButtonCancel = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 10px 20px;
  color: ${({ theme }) => theme.primaryFont};
  justify-content: center;
  flex: 1;
`
export const Filter = styled.div`
  flex-direction: row;
  background-color: ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.primaryContrast};
`
export const FilterFieldMonth = styled.div`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 20px 5px;
`
export const FilterFieldYear = styled.div`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 20px 5px;
  gap: 5px;
`
export const FilterButton = styled.div`
  padding: 10px 20px;
`
export const CalendarContent = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.secondary};
  grid-template: 
    "sun1 mon1 tue1 wed1 thu1 fri1 sat1" 1fr
    "sun2 mon2 tue2 wed2 thu2 fri2 sat2" 1fr
    "sun3 mon3 tue3 wed3 thu3 fri3 sat3" 1fr
    "sun4 mon4 tue4 wed4 thu4 fri4 sat4" 1fr;
  padding: 0 5px;
  gap: 0px;
`
export const Header = styled.div`
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.gray};
  align-items: center;
`
export const HeaderTitle = styled.div`
  padding: 10px;
  flex: 1;
  fontWeight: bold;
  color: ${({ theme }) => theme.primaryContrast};
`
export const DayItem = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 6px 2px;
  border-width: 0.5;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryFont};
`
export const DayNull = styled.div`
  color: ${({ theme }) => theme.primaryFont};
  background-color: ${({ theme }) => theme.secondary};
  width: 42px;
  height: 42px;
  margin: 6px 2px;
`
export const SelectedDay = styled.button`
  color: ${({ theme }) => theme.primaryFont};
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 6px 2px;
  border-width: 0.5;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.red};
}`
