import { useState } from 'react'
import * as S from './style'
import { getDay } from '@/components/utils'

export const EventItem = ({
  data,
  handleClick,
  unavaliable,
  activatedConfig,
  handleCheckUnavaliable
}) => {
  const [unavaliableItem, setUnabaliable] = useState(unavaliable)
  const handleUnavaliable = () => {
    handleCheckUnavaliable(data._id, !unavaliableItem)
    setUnabaliable(!unavaliableItem)
  }
  return <S.ContentInline>
    <S.CheckBox
      onClick={handleUnavaliable}
      disabled={!activatedConfig}
    >
      {/* <Icons name={unavaliableItem ? 'close' : 'checkbox'} size={30} color={activatedConfig ? (unavaliableItem ? COLORS.red : COLORS.gray) : COLORS.dark}/> */}
    </S.CheckBox>
    <S.EditButton onClick={handleClick}>
      <S.ContentText>{data.date}</S.ContentText>
      <S.ContentText>{getDay(new Date())}</S.ContentText>
      <S.ContentText>{data.dayShift}</S.ContentText>
    </S.EditButton>
  </S.ContentInline>
}