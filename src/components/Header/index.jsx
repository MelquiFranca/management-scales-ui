
import Avatar from '../Avatar'
import * as S from './style'

export default function Header ({ groups, activatedGroupId }) {
  const activatedGroup = groups.get(activatedGroupId)
  return <S.Container>
    <S.ListGroups>
      {Array.from(groups.values()).map((group, id) => <S.GroupNameItem key={id}>{group.name}</S.GroupNameItem>)}
    </S.ListGroups>
    <Avatar image={activatedGroup?.image} />
  </S.Container>
}