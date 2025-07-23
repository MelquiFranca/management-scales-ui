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
import * as S from './style'
import EventsList from './events'

export default function Page ({}) {
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
    <EventsList events={events} />
    {/* <EditConfigButton
      handleClickEdit={handleClickEdit}
      handleClickConfirm={handleClickAnswerAvaiableToCult}
      activatedConfig={activatedConfig}
      handleClickCancelAvaiableToCult={handleClickCancelAvaiableToCult}
      stylesCustomized={!!type}
    /> */}
  </ViewContent>
}
