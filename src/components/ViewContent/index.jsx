import * as S from './style'
const ViewContent = ({ children, alldisplay }) => {
  return <S.ViewContent alldisplay={alldisplay}>
    {children}
  </S.ViewContent>
}

export default ViewContent
