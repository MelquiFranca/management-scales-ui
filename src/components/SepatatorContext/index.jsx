import * as S from './style'

export default function SeparatorContext ({ children, label }) {
  return <S.Container>
  <S.Label>{label}</S.Label>
  {children}
</S.Container>
}
