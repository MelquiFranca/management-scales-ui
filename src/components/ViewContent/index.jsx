import * as S from './style'
const ViewContent = ({ children, allDisplay = false }) => {
  return <S.ViewContent allDisplay={allDisplay}>
    {children}
  </S.ViewContent>
}

export default ViewContent
