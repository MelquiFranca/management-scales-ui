import * as S from './style'

export default function InputField ({
  label,
  placeholderText,
  setValue,
  editable = true,
  iconName,
  secureTextEntry,
  customizedStyle,
  value = '',
  type = 'text',
  multiline = false,
  numberOfLines = 1,
  children
}) {
  return (
    <S.Container>
      <S.Icon>
        {/* <Icons name={iconName} size={25} color={COLORS.red}/> */}
      </S.Icon>
      <S.Input>
        <S.Label>{label}</S.Label>
        {children ? children : <S.InputText
          // numberOfLines={numberOfLines}
          // multiline={multiline}
          // inputMode={type}
          // editable={editable}
          placeholder={placeholderText}
          // placeholderTextColor={COLORS.secondaryFont}
          // onChangeText={setValue}
          // secureTextEntry={secureTextEntry}
          value={value}
        />}
      </S.Input>
    </S.Container>
  )
}