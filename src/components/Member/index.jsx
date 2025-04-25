// import { COLORS } from "../../constants"
import { useContext } from "react"
// import { HandleCreateContext, HandleLoadLoggedMembersContext } from "../contexts"
import * as S from './style'

export default function Member ({ data, activeAction = true, navigation, highlight }) {
  // const { activeScreen, handleClick } = useContext(HandleCreateContext)
  // const { loggedMember: { type, _id: loggedId } } = useContext(HandleLoadLoggedMembersContext)
  const handleOnPress = () => {
    // if(!activeAction || !type) return
    // handleClick(activeScreen, data, navigation)
  }
  return (
    <S.Container
      // style={{ ...styles.contentInline, ...customizedStyle?.container, ...(highlight && loggedId === data?._id && { backgroundColor: COLORS.primary }) }}
      onClick={handleOnPress}
    >
      {
      // data?.photo ? 
      <S.Image
        source={data.photo || ''}
        // style={{ ...styles?.photo, ...customizedStyle?.photo }}
      />
      // : <View style={{ ...styles?.photo, ...customizedStyle?.photo }}>
      //   <Icons
      //     name='user'
      //     size={30}
      //     color={COLORS.secondaryFont}
      //   />
      // </View>
      }
      {data?.name}
    </S.Container>
    )
}
