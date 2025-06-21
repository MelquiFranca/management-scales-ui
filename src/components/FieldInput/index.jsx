// import Icons from 'react-native-vector-icons/FontAwesome5'
import * as S from './style'

const FieldInput = ({
  label,
  placeholderText,
  setValue,
  editable = true,
  iconName,
  customizedStyle,
  value = '',
  type = 'text',
  children
}) => {
  return (
    <S.Container>
      <S.FieldIcon>
        {iconName && <S.Image size={25}></S.Image>}
      </S.FieldIcon>
      <S.Input>
        <S.Label>{label}</S.Label>
        {children ? children : <S.InputText
          type={type}
          editable={editable}
          placeholder={placeholderText}
          onChange={({ target }) => setValue(target.value)}
          value={value}
        />}
      <S.Separator />
      </S.Input>
    </S.Container>
  )
}

export default FieldInput
