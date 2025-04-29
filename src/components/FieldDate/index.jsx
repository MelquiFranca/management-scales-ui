'use client'

import Calendar from '../Calendar'
import * as S from './style'

export default function FieldDate ({ 
  date,
  handleDate,
  setVisible,
  visible
}) {
  const handleClickCalendar = () => setVisible(true)
  return <>
    <S.Container onClick={handleClickCalendar}>
      <S.Label>
        {date.toLocaleDateString()}
      </S.Label>
    </S.Container>
    <Calendar handleDate={handleDate} setVisible={setVisible} visible={visible}/>
  </>
}
