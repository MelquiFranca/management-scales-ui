// import { HandleCreateContext, HandleLoadLoggedMembersContext } from '../contexts'
import { useContext, useEffect, useState } from 'react'
// import AnnotationEditor from './AnnotationEditor'
import * as S from './style'
import FunctionMembers from '../FunctionMembers'
import { FUNCTIONS_ICONS, COLORS, formatDate } from '../utils'
import Avatar from '../Avatar'

export default function CardScale ({
  _id,
  // cult,
  cultId,
  annotations,
  rosteredMembers,
  handleRemoveRosteredMember,
  // handleAnnotationNewScale,
  navigation,
  expandCard = false,
  editable = false,
  membersEditable = false,
  highlightMember = false
}) {
  // const { activeScreen, handleClick } = useContext(HandleCreateContext)
  // const { loggedMember: { type, groupId, _id: updatedSponsor }, groups: [firstGroup] } = useContext(HandleLoadLoggedMembersContext)
  const { type, groupId, _id: updatedSponsor } = { type: true, groupId: '607c72020171590015ff9c92', _id: '607c72170171590015ff9c93' }
  const [expanded, setExpanded] = useState(true)
  // const [visibleAnnotation, setVisibleAnnotation] = useState(false)
  const [cultDate, setFormattedDate] = useState(null)
  // const { functionsData = FUNCTIONS_ICONS } = firstGroup
  const cult = {
    date: new Date(),
    dayShift: 'noite'
  }
  const hasMemberWithPermissionEdit = () => {
    const [functionMember] = Object.keys(rosteredMembers).filter((functionName) => {
      if (rosteredMembers[functionName].includes(updatedSponsor)) {
        return functionName
      }
    })
    return functionMember && FUNCTIONS_ICONS[functionMember]?.unique
  }
  const handleExpandToggle = () => {
    setExpanded(!expanded)
  }
  const handleUpdateAnnotation = () => {
    // setVisibleAnnotation(true)
  }
  useEffect(() => {
    const date = cult?.date && formatDate(new Date(cult?.date))
    setFormattedDate(date)
  }, [cult])
  useEffect(() => setExpanded(expandCard), [])
  return (<S.Container>
    {/* <AnnotationEditor
      visible={visibleAnnotation}
      groupId={groupId}
      scaleId={_id}
      editable={hasMemberWithPermissionEdit()}
      setVisible={setVisibleAnnotation}
      cultDate={cultDate}
      rosteredMembers={rosteredMembers}
      handleAnnotationNewScale={handleAnnotationNewScale}
      updatedSponsor={updatedSponsor}
      data={annotations}
      navigation={navigation}
    /> */}
    <S.Header>
      <Avatar size={25}/>
      <S.HeaderItem>{cultDate || cult?.date && formatDate(new Date(cult?.date))}</S.HeaderItem>
      <S.HeaderItem>{cult?.dayShift}</S.HeaderItem>
      <S.HeaderButton onClick={handleExpandToggle}>
        v
        {/* <Icon name={expanded ? 'expand-less': 'expand-more'} size={30} color={COLORS.primaryFont} /> */}
      </S.HeaderButton>
    </S.Header>
    <S.ContentGroup expanded={expanded}>
      <S.Content>
        {Object.keys(rosteredMembers)?.map((functionName, index) => <FunctionMembers
          key={index} functionName={functionName}
          memberIds={rosteredMembers[functionName]}
          editable={membersEditable}
          handleRemove={handleRemoveRosteredMember}
          highlightMember={highlightMember}
        />
        )}
      </S.Content>
      <S.Footer>
        <S.EditButton onClick={() => handleUpdateAnnotation({ navigation })}>
          {/* <IconCommunity name='book-edit-outline' size={25} color={COLORS.gray}/> */}
        </S.EditButton>
        {(editable && type)
          && <S.EditButton
              fullEdit={true}
              // onClick={() => handleClick(activeScreen, { ...cult, cultId, rosteredMembers, _id, annotations }, navigation)}
            >
          {/* <IconCommunity name='circle-edit-outline' size={25} color={COLORS.gray}/> */}
        </S.EditButton>}
      </S.Footer>
    </S.ContentGroup>
  </S.Container>)
}

