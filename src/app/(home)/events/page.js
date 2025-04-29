'use client'
import { useState } from 'react'
// import Icons from 'react-native-vector-icons/Ionicons'
// import { useAsyncStorage } from '@react-native-async-storage/async-storage'

// import { COLORS } from '../../constants'
// import { HandleCreateContext, HandleCultsContext, HandleLoadLoggedMembersContext } from '../contexts'
// import { getDay, loadDataStorage, updateDateStorage } from '../../utils'
// import ScalesService from '../services/ScalesService'
// import EditConfigButton from '../components/EditConfigButton'
// import CultsService from '../services/CultsService'
import ViewContent from '@/components/ViewContent'
import { getDay } from '@/components/utils'
import * as S from './style'

const EventItem = ({
  data,
  activeScreen,
  handleClick,
  navigation,
  unavaliable,
  activatedConfig,
  handleCheckUnavaliable
}) => {
  const [unavaliableItem, setUnabaliable] = useState(unavaliable)
  const handleUnavaliable = () => {
    handleCheckUnavaliable(data._id, !unavaliableItem)
    setUnabaliable(!unavaliableItem)
  }
  return <S.ContentInline>
    <S.CheckBox
      onClick={handleUnavaliable}
      disabled={!activatedConfig}
    >
      {/* <Icons name={unavaliableItem ? 'close' : 'checkbox'} size={30} color={activatedConfig ? (unavaliableItem ? COLORS.red : COLORS.gray) : COLORS.dark}/> */}
    </S.CheckBox>
    <S.EditButton onClick={() => handleClick && handleClick(activeScreen, data, navigation)}>
      <S.ContentText>{data.date}</S.ContentText>
      <S.ContentText>{getDay(new Date())}</S.ContentText>
      <S.ContentText>{data.dayShift}</S.ContentText>
    </S.EditButton>
  </S.ContentInline>
}
export default function Page ({ navigation }) {
  // const { activeScreen, handleClick } = useContext(HandleCreateContext)
  // const { getItem, setItem: setCultsList } = useAsyncStorage('@events')
  // const { setItem: setScalesStorage } = useAsyncStorage('@scales')
  const [activatedConfig, setActivatedConfig] = useState(false)
  const [unavaliableCultList, setUnavaliableCultList] = useState(new Set())
  const [events, setEvents] = useState([
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
    {
      date: '25/04/2025',
      dayShift: 'Manhã'
    },
  ])
  // const { events, setCults } = useContext(HandleCultsContext)
  // const { loggedMember: { type, groupId, _id: loggedMemberId } } = useContext(HandleLoadLoggedMembersContext)
  const loadUnavaliableMembersByCult = () => {
    unavaliableCultList.clear()
    events?.forEach(({ _id, unavaliableMembers }) => {
      if (!unavaliableMembers?.length) return
      if (unavaliableMembers.includes(loggedMemberId)) return changeAvaliableList(_id, true)
      changeAvaliableList(_id, false)
    })
  }
  const handleClickAnswerAvaiableToCult = async () => {
    const result = await CultsService.answerUnavaliableToCult({
      unavaliableCultIds: Array.from(unavaliableCultList.values()),
      memberId: loggedMemberId
    })
    if(result.success) {
      await updateDateStorage({ service: CultsService, set: setCultsList, groupId })
    }
    setActivatedConfig(false)
  }
  const handleClickCancelAvaiableToCult = async () => {
    loadUnavaliableMembersByCult()
    setActivatedConfig(false)
  }
  const handleClickEdit = () => {
    setActivatedConfig(true)
  }
  const changeAvaliableList = (eventId, add = true) => {
    if (add) unavaliableCultList.add(eventId)
    else unavaliableCultList.delete(eventId)
    setUnavaliableCultList(unavaliableCultList)
  }
  // useEffect(() => {
  //   if(params?.updated) {
  //     loadDataStorage({ get: getItem, set: setCults })
  //     updateDateStorage({ service: ScalesService, set: setScalesStorage, groupId })
  //   }
  // }, [params])
  // useEffect(() => {
  //   loadUnavaliableMembersByCult()
  // }, [events])
  return <ViewContent>
    <S.ContentInlineHeader>
      <S.HeaderSelect>Disponível</S.HeaderSelect>
      <S.HeaderText>Data</S.HeaderText>
      <S.HeaderText>Dia Semana</S.HeaderText>
      <S.HeaderText>Turno</S.HeaderText>
    </S.ContentInlineHeader>
    {<S.Container>
      {events?.map((event, index) => <EventItem
        data={event}
        // activeScreen={activeScreen}
        // handleClick={type && handleClick}
        key={index}
        navigation={navigation}
        // unavaliable={event.unavaliableMembers.includes(loggedMemberId)}
        activatedConfig={activatedConfig}
        handleCheckUnavaliable={changeAvaliableList}
      />)}
    </S.Container>}
    {/* <EditConfigButton
      handleClickEdit={handleClickEdit}
      handleClickConfirm={handleClickAnswerAvaiableToCult}
      activatedConfig={activatedConfig}
      handleClickCancelAvaiableToCult={handleClickCancelAvaiableToCult}
      stylesCustomized={!!type}
    /> */}
  </ViewContent>
}
