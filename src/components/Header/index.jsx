
import Avatar from '../Avatar'
import * as S from './style'

export default function Header ({ groups, user }) {
  return <S.Container>
    <S.ListGroups>
      {groups.map((group, id) => <S.GroupNameItem key={id}>{group.name}</S.GroupNameItem>)}
    </S.ListGroups>
    <Avatar image={user.image} />
  </S.Container>
}