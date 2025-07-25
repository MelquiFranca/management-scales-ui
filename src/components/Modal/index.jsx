import * as S from './style'

const Modal = ({ visible = false, title, message, onClose, children }) => {
  return visible && <S.Container>
    {children || 
    <><S.Title>
    {title}
  </S.Title>
  <S.Message>
    {message}
  </S.Message>
  <S.Actions>
    <S.ButtonClose onClick={onClose}>
      {/* <Icons name={redirectTo ? 'check' : 'close'} size={50} color={COLORS.red}/> */}
      Clique para Fechar
    </S.ButtonClose>
  </S.Actions></>}
  </S.Container>
}
export default Modal
