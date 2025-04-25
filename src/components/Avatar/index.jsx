import * as S from './style'
import ImageMock from '../../../public/assets/icon.png'

export default function Avatar ({ image, size }) {
  return <S.Container size={size}>
    <S.Image src={image || ImageMock.src}></S.Image>
  </S.Container>
}
