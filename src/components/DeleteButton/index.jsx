import * as S from './style'

export default function DeleteButton ({ handleClick, customizedStyle, label }) {
  return (<S.Container onClick={handleClick}>
    {/* <Icons name='trash' size={15} color={COLORS.red}/> */}
    {label}
  </S.Container>)
}
