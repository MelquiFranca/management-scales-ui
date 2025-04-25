// import { HandleCreateContext, HandleLoadLoggedMembersContext } from '../contexts'
import { useContext, useEffect, useState } from 'react'
// import AnnotationEditor from './AnnotationEditor'
import * as S from './style'
import FunctionMembers from '../FunctionMembers'
import { FUNCTIONS_ICONS, COLORS, formatDate } from '../utils'
import Avatar from '../Avatar'

export default function CardScale ({
  _id,
  // event,
  eventId,
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
  const { type, groupId, _id: updatedSponsor } = { type: true, groupId: '111', _id: '123' }
  const [expanded, setExpanded] = useState(true)
  // const [visibleAnnotation, setVisibleAnnotation] = useState(false)
  const [eventDate, setFormattedDate] = useState(null)
  // const { functionsData = FUNCTIONS_ICONS } = firstGroup
  const event = {
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
    const date = event?.date && formatDate(new Date(event?.date))
    setFormattedDate(date)
  }, [event])
  useEffect(() => setExpanded(expandCard), [])
  return (<S.Container>
    {/* <AnnotationEditor
      visible={visibleAnnotation}
      groupId={groupId}
      scaleId={_id}
      editable={hasMemberWithPermissionEdit()}
      setVisible={setVisibleAnnotation}
      eventDate={eventDate}
      rosteredMembers={rosteredMembers}
      handleAnnotationNewScale={handleAnnotationNewScale}
      updatedSponsor={updatedSponsor}
      data={annotations}
      navigation={navigation}
    /> */}
    <S.Header>
      <Avatar size={25}/>
      <S.HeaderItem>{eventDate || event?.date && formatDate(new Date(event?.date))}</S.HeaderItem>
      <S.HeaderItem>{event?.dayShift}</S.HeaderItem>
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
              // onClick={() => handleClick(activeScreen, { ...event, eventId, rosteredMembers, _id, annotations }, navigation)}
            >
          {/* <IconCommunity name='circle-edit-outline' size={25} color={COLORS.gray}/> */}
        </S.EditButton>}
      </S.Footer>
    </S.ContentGroup>
  </S.Container>)
}

