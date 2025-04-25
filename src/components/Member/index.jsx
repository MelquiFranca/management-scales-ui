// import { COLORS } from "../../constants"
import { useContext } from "react"
// import { HandleCreateContext, HandleLoadLoggedMembersContext } from "../contexts"
import * as S from './style'
import Avatar from "../Avatar"

export default function Member ({ data, activeAction = true, navigation, highlight, sizeImage = 35 }) {
  // const { activeScreen, handleClick } = useContext(HandleCreateContext)
  // const { loggedMember: { type, _id: loggedId } } = useContext(HandleLoadLoggedMembersContext)
  const handleOnPress = () => {
    // if(!activeAction || !type) return
    // handleClick(activeScreen, data, navigation)
  }
  return (
    <S.Container
      onClick={handleOnPress}
    >
      <Avatar size={sizeImage} image={data?.photo}/>
      <S.Name>{data?.name}</S.Name>
    </S.Container>
    )
}
