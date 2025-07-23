'use client'
import { useContext, useEffect, useState } from 'react'
// import { useAsyncStorage } from '@react-native-async-storage/async-storage'
// import Icons from 'react-native-vector-icons/FontAwesome5'
// import ViewContent from "../../components/ViewContent"
// import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native"
// import FieldInput from "../../components/FieldInput"
// import { Picker } from "@react-native-picker/picker"
// import { formatDate, getSelectedMemberIds, loadDataStorage, updateDateStorage } from "../../../utils"
// import { COLORS, FUNCTIONS_ICONS } from "../../../constants"
// import CardScale from "../../components/CardScale"
// import ScalesService from "../../services/ScalesService"
// import MyModal from "../../components/MyModal"
// import ActionButtonsBlock from "../../components/ActionButtonsBlock"
// import DeleteButton from "../../components/DeleteButton"
// import SeparatorContext from "../../components/SeparatorContext"
import AlertMessage from '@/components/AlertMessage'
import Modal from '@/components/Modal'
import ViewContent from '@/components/ViewContent'
import SeparatorContext from '@/components/SepatatorContext'
import DeleteButton from '@/components/DeleteButton'
import FieldInput from '@/components/FieldInput'
import CardScale from '@/components/CardScale'
import ActionButtonsBlock from '@/components/ActionButtonsBlock'
import * as S from './style'
import { FUNCTIONS_ICONS } from '@/components/utils'

// import AlertMessage from "../../components/AlertMessage"
// import { HandleCultsContext, HandleLoadLoggedMembersContext, HandleMembersContext } from "../../contexts"
// import worker from "../../notifications/workerInstance"

export default function Page ({ navigation }) {
  const [members, setMembers] = useState([])
  const [events, setEvents] = useState([])
  const [scales, setScales] = useState([])
  const [annotations, setAnnotations] = useState({})
  const [selectedMemberId, setSelectedMemberId] = useState('')
  const [selectedCultId, setSelectedCultId] = useState('')
  const [selectedFunction, setSelectedFunction] = useState('')
  const [rosteredMembers, setRosteredMembers] = useState({})
  const [editable, setEditable] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [modalAlertVisible, setModalAlertVisible] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [redirectTo, setRedirectTo] = useState(null)
  // const { members: allMembers } = useContext(HandleMembersContext)
  // const { events: allCults } = useContext(HandleCultsContext)
  // const { loggedMember: { groupId, _id: updatedSponsor }, groups: [firstGroup] } = useContext(HandleLoadLoggedMembersContext)
  // const { getItem: getScales, setItem: setItemScaleStorage } = useAsyncStorage('@scales')
  // const { functionsData = FUNCTIONS_ICONS } = firstGroup
  const functionsData = FUNCTIONS_ICONS
  const handleAddMemberToScale = () => {
    if (!selectedFunction || !selectedMemberId) return
    if (functionsData[selectedFunction]?.unique && rosteredMembers[selectedFunction]?.length > 1) return
    rosteredMembers[selectedFunction] = [...(rosteredMembers[selectedFunction] || []), selectedMemberId]
    const updatedRosteredMembers = { ...rosteredMembers }
    setMembers(handleFilterMember(updatedRosteredMembers, allMembers))
    setRosteredMembers(updatedRosteredMembers)
    setSelectedMemberId('')
    setSelectedFunction('')
  }
  const showModal = ({ message, title, success }) => {
    setModalAlertVisible(false)
    setModalMessage(message)
    setModalTitle(title)
    setModalVisible(true)
    setRedirectTo(success ? 'Escalas' : null)
  }
  const handleSave = async () => {
    if(!selectedCultId && selectedCultId !== 0) {
      return showModal({ 
        message: 'Nenhum evento selecionado',
        success: false,
        title: 'Dados pendentes'
      })
    }
    if(!Object.keys(rosteredMembers).length) {
      return showModal({ 
        message: 'Nenhum membro inserido na escala',
        success: false,
        title: 'Dados pendentes'
      })
    }
    // const data = {
    //   _id: params?._id,
    //   rosteredMembers,
    //   cultId: selectedCultId,
    //   annotations,
    //   groupId,
    //   updatedSponsor,
    //   functionsData
    // }
    // const result = await ScalesService.create(data)
    // const event = events.find(({ _id }) => selectedCultId === _id)
    // const cultDate = formatDate(new Date(event.date))
    // worker.postMessage({
    //   grupo_id: groupId,
    //   scaleId: result.data._id,
    //   shouldShowNotification: true,
    //   type: 'sendNotification',
    //   membersIdNotification: getSelectedMemberIds(rosteredMembers).filter(id => id !== updatedSponsor),
    //   dataMessage: {
    //     title: 'Nova Escala Disponível',
    //     text: `Você foi adicionado na escala do dia ${cultDate}`,
    //   }
    // })
    // showModal(result)
  }
  const handleDelete = async () => {
    // if(!params?._id) return showModal({ 
    //   message: 'Nenhuma escala informada',
    //   success: false,
    //   title: 'Erro'
    // })
    // const result = await ScalesService.deleteItem(params._id)
    // if(result.success) {
    //   await updateDateStorage({ service: ScalesService, set: setItemScaleStorage, groupId })
    // }
    setModalAlertVisible(false)
    // showModal(result)
  }
  const handleFilterMember = (rostereds, membersList) => {
    const rosteredMembersIds = Object.keys(rostereds).reduce((acc, key) => {
      acc.push(...rostereds[key])
      return acc
    }, [])
    const filteredMembers = membersList?.filter(member => !rosteredMembersIds.includes(member._id))
    return filteredMembers
  }
  const handleRemoveRosteredMember = (id, shouldUpdateMembers = true) => {
    const newRosteredMembers = Object.keys(rosteredMembers).reduce((acum, functionName) => {
      if(rosteredMembers[functionName].includes(id)) {
        acum[functionName] = rosteredMembers[functionName].filter(memberId => memberId !== id)
      }
      if(!acum[functionName].length) delete acum[functionName]
      return acum
    }, { ...rosteredMembers })
    setRosteredMembers(newRosteredMembers)
    if (shouldUpdateMembers) {
      const removedMember = allMembers.find(({ _id }) => _id === id)
      const newMembers = handleFilterMember(newRosteredMembers, [...members, removedMember])
        .sort((m1, m2) => {
          if (m1.name === m2.name) return 0
          return m1.name > m2.name ? 1 : -1
        })
      setMembers(newMembers)
    }
  }
  // useEffect(() => loadDataStorage({ get: getScales, set: setScales }), [])
  // useEffect(() => {
  //   const event = events.find(({ _id }) => selectedCultId === _id)
  //   if (!event) return setMembers(handleFilterMember(rosteredMembers, allMembers))
  //   event.unavaliableMembers?.forEach(newMemberId => handleRemoveRosteredMember(newMemberId, false))
  //   const newMemberList = event.unavaliableMembers?.length
  //     ? allMembers
  //       .filter(({ _id }) => !event.unavaliableMembers.includes(_id))
  //     : allMembers
  //   setMembers(
  //     Object.keys(rosteredMembers).length
  //       ? handleFilterMember(rosteredMembers, newMemberList)
  //       : newMemberList
  //   )
  // }, [selectedCultId])
  // useEffect(() => {
  //   if (!params?._id) {
  //     const filteredCult = allCults?.filter(event => !scales?.find(scale => scale.cultId === event._id))
  //     setEvents(filteredCult || [])
  //   }
  // }, [scales])
  // useEffect(() => {
  //   if(params?.cultId) {
  //     setEditable(!!params._id)
  //     const filteredCult = allCults?.filter(event => event._id === params.cultId)
  //     setMembers(handleFilterMember(params?.rosteredMembers, members))
  //     setEvents(filteredCult)
  //     setAnnotations(params?.annotations)
  //     setSelectedCultId(params.cultId)
  //     setRosteredMembers(params?.rosteredMembers)
  //   }
  // }, [params?._id])
  return <ViewContent alldisplay>
    <Modal
      visible={modalVisible}
      setVisible={setModalVisible}
      redirectTo={redirectTo}
      navigation={navigation}
      message={modalMessage}
      title={modalTitle}
    />
    <AlertMessage
      message='Deseja realmente excluir esta Escala?'
      title='Confirmação'
      visible={modalAlertVisible}
      setVisible={setModalAlertVisible}
      handleConfirm={handleDelete}
    />
    <S.Container>
      <SeparatorContext label='Data e Período' >
        {editable && <DeleteButton
          handleClick={() => setModalAlertVisible(true)}
          label='Excluir Escala'
        />}
      </SeparatorContext>
      <S.MembersScaleForm>
        <FieldInput
          iconName='church'
          label='Evento'
        >
          <S.Select
            selectedValue={selectedCultId}
            onValueChange={setSelectedCultId}
            // enabled={!params?._id}
          >
            <S.Options label="Selecione o evento..." value=''/>
            {events
              ?.filter(({ _id }) => (scales.length && !params?._id) ? scales.find(({ cultId }) => cultId !== _id) : true)
              .map((event, index) => <S.Options key={index} label={formatDate(event?.date && new Date(event.date))} value={event._id} />)}
          </S.Select>
        </FieldInput>
      </S.MembersScaleForm>
      <SeparatorContext label='Escalar Membros'/>
      <S.MembersScaleForm>
        <FieldInput
          iconName='users'
          label='Membro'
        >
          <S.Select selectedValue={selectedMemberId} onValueChange={setSelectedMemberId}>
            <S.Options label="Selecione um membro..." value={null}/>
            {members?.map((member, index) => <S.Options key={index} label={member.name} value={member._id} />)}
          </S.Select>
        </FieldInput>
        <FieldInput
          iconName='sitemap'
          label='Função'
        >
          <S.Select selectedValue={selectedFunction} onValueChange={setSelectedFunction}>
            <S.Options label="Selecione a função..." value=''/>
            {Object.keys(functionsData)?.map((func, index) => <S.Options key={index} label={functionsData[func].name} value={func}/>)}
          </S.Select>
        </FieldInput>
        <S.ActionButtonAddMember onClick={handleAddMemberToScale}>
          {/* <Icons name='list-ul' size={25} color={COLORS.primaryFont}/> */}
          Escalar
        </S.ActionButtonAddMember>
        <CardScale
          event={events?.find(c => c._id === selectedCultId)}
          rosteredMembers={rosteredMembers}
          handleRemoveRosteredMember={handleRemoveRosteredMember}
          editable={false}
          expandCard={true}
          membersEditable={true}
          annotations={annotations}
          handleAnnotationNewScale={setAnnotations}
        />
      </S.MembersScaleForm>
    </S.Container>
    <ActionButtonsBlock handleClick={handleSave} title='Salvar Escala' />
  </ViewContent>
}
