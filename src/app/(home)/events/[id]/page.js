'use client'
// import { StyleSheet, View } from 'react-native'
// import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
// import FieldInput from '../../components/FieldInput'
// import FieldDate from '../../components/FieldDate'
// import { COLORS } from '../../../constants'
// import { Picker } from '@react-native-picker/picker'

// import CultsService from '../../services/CultsService'
// import { updateDateStorage } from '../../../utils'
// import { HandleLoadLoggedMembersContext } from '../../contexts'

import ViewContent from '@/components/ViewContent'
import Modal from '@/components/Modal'
import ActionButtonsBlock from '@/components/ActionButtonsBlock'
import AlertMessage from '@/components/AlertMessage'
import * as S from './style'
import FieldInput from '@/components/FieldInput'
import FieldDate from '@/components/FieldDate'
import Calendar from '@/components/Calendar'
import SeparatorContext from '@/components/SepatatorContext'
import DeleteButton from '@/components/DeleteButton'

export default function Page ({ params }) {
  const [date, setDate] = useState(new Date())
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [dayShift, setDayShift] = useState('Noite')
  const [modalMessage, setModalMessage] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [modalAlertVisible, setModalAlertVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [redirectTo, setRedirectTo] = useState(null)
  const [editable, setEditable] = useState(true)
  // const { setItem: setEventsList } = useAsyncStorage('@events')
  // const { loggedMember: { groupId, _id: updatedSponsor } } = useContext(HandleLoadLoggedMembersContext)

  const showModal = ({ message, title, success }) => {
    setModalMessage(message)
    setModalTitle(title)
    setModalVisible(true)
    setRedirectTo(success ? 'Eventos' : null)
  }
  const handleSave = async () => {
    const result = await CultsService.create({
      _id: params?._id,
      dayShift,
      date,
      groupId,
      updatedSponsor
    })
    if(result.success) {
      await updateDateStorage({ service: CultsService, set: setEventsList, groupId })
    }
    showModal(result)
  }
  const handleDelete = async () => {
    alert('Deletou')
    // if(!params?._id) return showModal({ 
    //   message: 'Nenhum Evento informado',
    //   success: false,
    //   title: 'Erro'
    // })
    // const result = await CultsService.deleteItem(params._id)
    // if(result.success) {
    //   await updateDateStorage({ service: CultsService, set: setEventsList, groupId })
    // }
    setModalAlertVisible(false)
    // showModal(result)
  }
  // useEffect(() => {
  //   if(params?._id) {
  //     setEditable(!!params._id)
  //     setDayShift(params?.dayShift)
  //     setDate(params?.date ? new Date(params.date) : new Date())
  //   }
  // }, [])
  return <ViewContent allDisplay>
    <Modal
      visible={modalVisible}
      setVisible={setModalVisible}
      redirectTo={redirectTo}
      message={modalMessage}
      title={modalTitle}
    />
    <Calendar handleDate={setDate} setVisible={setCalendarVisible} visible={calendarVisible}/>
    <AlertMessage
      message='Deseja realmente excluir este Evento? Será excluída também, qualquer escala que esteja vinculada ao mesmo.'
      title='Confirmação'
      visible={modalAlertVisible}
      setVisible={setModalAlertVisible}
      handleConfirm={handleDelete}
    />
    <SeparatorContext label='Dados do Evento'>
      {editable && <DeleteButton
        handleClick={() => setModalAlertVisible(true)}
        label='Excluir'
      />}
    </SeparatorContext>
    <S.Container>
      <S.Form>
        <FieldInput
          label='Dia do Evento'
          iconName='calendar'
          >
            {/* <FieldDate
              date={date}
              handleDate={setDate}
              setVisible={setCalendarVisible}
              visible={calendarVisible}
            /> */}
            <S.ContainerCalendar onClick={() => setCalendarVisible(true)}>
              <S.Label>
                {date.toLocaleDateString()}
              </S.Label>
            </S.ContainerCalendar>
        </FieldInput>
        <FieldInput
          label='Período do Evento'
          iconName='clock'
        >
          <S.SelectShiftDay
            value={dayShift}
            onChange={setDayShift}>
            <S.OptionShiftDay label='Manhã' value='Manhã' />
            <S.OptionShiftDay label='Tarde' value='Tarde' />
            <S.OptionShiftDay label='Noite' value='Noite' />
          </S.SelectShiftDay>
        </FieldInput>
      </S.Form>
      <ActionButtonsBlock handleClick={handleSave} title='Salvar Evento'/>
    </S.Container>
  </ViewContent>
}
