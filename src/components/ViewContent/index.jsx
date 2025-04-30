import * as S from './style'
const ViewContent = ({ children, allDisplay }) => {
  return <S.ViewContent allDisplay={allDisplay}>
    {children}
  </S.ViewContent>
}

export default ViewContent
