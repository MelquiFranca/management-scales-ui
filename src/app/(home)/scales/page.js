'use client'
import { useContext, useState } from 'react'
import ViewContent from '@/components/ViewContent'
import Scales from './scales'
import * as S from './style'
import DialogMessage from '@/components/DialogMessage'
import Modal from '@/components/Modal'
import { DataProvider } from '@/contexts'

export default function Page ({}) {
  const [visibleMessages, setVisibleMessages] = useState(false)
  const { scales } = useContext(DataProvider)
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
      <Scales scales={scales} setVisibleMessages={setVisibleMessages} />
    <S.Container>
    </S.Container>
  </ViewContent>)
}
