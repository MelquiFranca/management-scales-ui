import * as S from './style'

const ActionButtonsBlock = ({ iconName, handleClick, title, customizedStyle = {} }) => {
  return <S.Container style={{ ...customizedStyle.container }}>
    <S.SaveButton style={{ ...customizedStyle.saveButton }} onClick={handleClick}>
      {/* <Icons name={iconName || 'save'} size={25} color={COLORS.primaryFont}/> */}
      {title}
    </S.SaveButton>
  </S.Container>
}

export default ActionButtonsBlock
