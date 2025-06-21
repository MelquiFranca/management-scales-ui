import * as S from './style'
import Avatar from "../Avatar"

export default function Member ({ data, handleClick, sizeImage = 35 }) {
  return (
    <S.Container
      onClick={handleClick}
    >
      <Avatar size={sizeImage} image={data?.photo}/>
      <S.Name>{data?.name}</S.Name>
    </S.Container>
    )
}
