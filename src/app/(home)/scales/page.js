'use client'
import {useContext, useEffect, useState } from 'react'
import ViewContent from '@/components/ViewContent'
import CardScale from '@/components/CardScale'
import * as S from './style'
import DialogMessage from '@/components/DialogMessage'
import Modal from '@/components/Modal'

const scales = [
{
  _id:  '445',
  rosteredMembers: {
    vocals: [
      '123'
    ],
    bass: [
      '123'
    ],
    leader: [
      '123'
    ]
  },
  eventId:  '777',
  createdAt: {
    date: '2021-04-19T10:08:15.750Z'
  },
  updatedAt: {
    date: '2024-09-30T15:29:32.029Z'
  },
  __v: 0,
  annotations: {},
  groupId:  '111',
},{
  _id:  '607d568fc1fb6e001543d9f3',
  rosteredMembers: {
    vocals: [
      '123',
      '123',
      '123',
      '123',
      '123',
    ],
    bass: [
      '123',
      '123',
      '123',
      '123',
      '123',
    ],
    leader: [
      '123',
      '123',
      '123',
      '123',
      '123',
    ]
  },
  eventId:  '607d566fc1fb6e001543d9f2',
  createdAt: {
    date: '2021-04-19T10:08:15.750Z'
  },
  updatedAt: {
    date: '2024-09-30T15:29:32.029Z'
  },
  __v: 0,
  annotations: {},
  groupId:  '111',
},] // MOCK
export default function Page ({ navigation }) {
  const [visibleMessages, setVisibleMessages] = useState(false)
  // const { scales, setScales } = useContext(HandleScalesContext)
  // const { events, setEvents } = useContext(HandleEventsContext)
  // const { getItem: getItemScales } = useAsyncStorage('@scales')
  // const { getItem: getItemEvents } = useAsyncStorage('@events')
  // useEffect(() => {
  //   if (params?.updated) {
  //     loadDataStorage({ get: getItemScales, set: setScales })
  //   }
  // }, [])
  // useEffect(() => {
  //   if (params?.updated) {
  //     loadDataStorage({ get: getItemEvents, set: setEvents })
  //   }
  // }, [params])
  return (<ViewContent>
    <Modal visible={visibleMessages} title='Mensagens'>
      <DialogMessage visible={visibleMessages} setVisible={setVisibleMessages}/>
    </Modal>
    <S.Container>
      {scales?.map((scale, key) => 
        <S.WrapperScale key={key}>
          <CardScale
            {...scale}
            event={[]?.find(c => c._id === scale.eventId)} // TO DO
            annotations={scale.annotations}
            navigation={navigation}
            editable={true}
            membersEditable={false}
            highlightMember={true}
            handleVisibleMessages={setVisibleMessages}
          />
        </S.WrapperScale>
      )}
    </S.Container>
  </ViewContent>)
}
