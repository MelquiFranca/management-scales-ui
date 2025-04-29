import * as S from './style'
import Modal from '../Modal'

const AlertMessage = ({ visible, setVisible, message, title, handleConfirm, activeActions = true, customizeStyle, loading = false }) => {
  return <Modal visible={visible} setVisible={setVisible}>
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Message>{message}</S.Message>
      <S.GroupButtonAction>
      {activeActions && <><S.ActionButtonConfirm
          onClick={handleConfirm}
        >Confirmar
        </S.ActionButtonConfirm>
        <S.ActionButtonCancel
          onClick={() => setVisible(false)}
        >Cancelar
        </S.ActionButtonCancel></>}
      </S.GroupButtonAction>
    </S.Container>
  </Modal>
}

export default AlertMessage
