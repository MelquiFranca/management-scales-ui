'use client'
import { useEffect, useState } from 'react'
import Modal from '../Modal'
import * as S from './style'

Date.prototype.getDaysOfMonth = (year, month, day) => {
  const date = (year && month && day) ? new Date(year, month, day) : new Date()
  if (date.getMonth() === 1) {
    const year = date.getFullYear()
    const days = !(year % 4) ? ((year % 400) ? 29 : 28) : !(year % 100) ? 29 : 28
    return days
  }
  const actualMonth = date.getMonth()
  date.setDate(31)
  const days = (date.getMonth() === actualMonth) ? 31 : 30
  return days
}

export default function Calendar ({ handleDate, visible, setVisible }) {
  const [date, setDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState(date.getDate())
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth())
  const [selectedMonthName, setSelectedMonthName] = useState()
  const [selectedYear, setSelectedYear] = useState(date.getFullYear())
  const [quantityDaysOfMonth, setQuantityDaysOfMonth] = useState(date.getDaysOfMonth())
  const getCalendarValues = () => ([
    ...Array(date.getDay()).fill(''),
    ...Array
      .from(Array(quantityDaysOfMonth))
      .map((_, index) => index + 1),
  ])
  const [calendarValues, setCalendarValues] = useState(getCalendarValues())
  
  const getMonthName = (actualDate) => Intl.DateTimeFormat(
    'pt-BR',
    { month: 'long' }
  ).format(actualDate)
  const handleClickConfirm = () => {
    handleDate(new Date(selectedYear, selectedMonth, selectedDay))
    setVisible(false)
  }
  const handleClickCancel = () => {
    setVisible(false)
  }
  const handleClickCalendarDay = (day) => setSelectedDay(day)
  const handleClickPrevMonth = () => {
    setDate(new Date(selectedYear, selectedMonth > 0 ? selectedMonth - 1 : 11, 1))
    setSelectedMonth(selectedMonth > 0 ? selectedMonth - 1 : 11)
    setSelectedDay(1)
  }
  const handleClickNextMonth = () => {
    setDate(new Date(selectedYear, selectedMonth + 1, 1))
    setSelectedMonth(selectedMonth + 1)
    setSelectedDay(1)
  }
  const handleClickPrevYear = () => {
    setDate(new Date(selectedYear - 1, selectedMonth, 1))
    setSelectedYear(selectedYear - 1)
    setSelectedDay(1)
  }
  const handleClickNextYear = () => {
    setDate(new Date(selectedYear + 1, selectedMonth, 1))
    setSelectedYear(selectedYear + 1)
    setSelectedDay(1)
  }
  useEffect(() => {
    const days = date.getDaysOfMonth(selectedYear, selectedMonth, 1)
    setSelectedMonthName(getMonthName(new Date(selectedYear, selectedMonth, selectedDay)))
    setQuantityDaysOfMonth(days)
  }, [selectedDay, selectedMonth, selectedYear])
  useEffect(() => setCalendarValues(getCalendarValues()), [date, quantityDaysOfMonth])
  const Item = ({ item }) => {
    if (!item) return <S.DayNull></S.DayNull>
    const TypeItem = selectedDay === item ? S.SelectedDay : S.DayItem
    return <TypeItem
      key={item}
      onClick={() => handleClickCalendarDay(item)}
    >{item}</TypeItem>
  }
  return (
    <Modal
      visible={visible}
    >
      <S.Container>
        <S.Title>Calendário</S.Title>
        <S.Calendar>
          <S.Content>
            <S.Filter>
              <S.FilterFieldMonth>
                <S.FilterButton
                 
                  onClick={handleClickPrevMonth}
                >
                  {/* <Icons name='chevron-left'/> */}
                </S.FilterButton>
                {selectedMonthName}
                <S.FilterButton
                  onClick={handleClickNextMonth}
                >
                  {/* <Icons name='chevron-right'/> */}
                </S.FilterButton>
              </S.FilterFieldMonth>
              <S.FilterFieldYear>
              <S.FilterButton
               
                onClick={handleClickPrevYear}
              >
                  {/* <Icons name='chevron-left'/> */}
                </S.FilterButton>
                {selectedYear}
                <S.FilterButton
                 
                  onClick={handleClickNextYear}
                >
                  {/* <Icons name='chevron-right'/> */}
                </S.FilterButton>
              </S.FilterFieldYear>
            </S.Filter>
            <S.Header>
              {
                ['D','S','T','Q','Q','S', 'S']
                  .map(
                    (day, index) => <S.HeaderTitle key={index}>{day}</S.HeaderTitle>
                  )
              }
            </S.Header>
            <S.CalendarContent>
              {/* <FlatList
                numColumns={7}
                centerContent={true}
                data={}
                renderItem={Item}
              /> */}
              {calendarValues.map((data, index) => <Item key={index} item={data}/>)}
            </S.CalendarContent>
          </S.Content>
        </S.Calendar>
        <S.Actions>
          <S.ActionButtonConfirm
            onClick={handleClickConfirm}
          >
            Confirmar
          </S.ActionButtonConfirm>
          <S.ActionButtonCancel
           
            onClick={handleClickCancel}
          >
            Cancelar
          </S.ActionButtonCancel>
        </S.Actions>
      </S.Container>
    </Modal>
  )
}
