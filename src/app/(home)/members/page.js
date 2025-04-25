'use client'
import { useState } from 'react'
import Member from '@/components/Member'
import ViewContent from '@/components/ViewContent'
import * as S from './style'

export default function Page ({ navigation }) {
  // const { members, setMembers } = useContext(HandleMembersContext)
  const [members, setMembers] = useState([
    {
      _id: '123',
      photo: '',
      name: 'Sunda'
    },
    {
      _id: '123',
      photo: '',
      name: 'Foo'
    },
    {
      _id: '123',
      photo: '',
      name: 'Bar'
    },
  ])
  // const { getItem } = useAsyncStorage('@members')
  // useEffect(() => {
  //   if(params?.updated) loadDataStorage({ get: getItem, set: setMembers })
  // }, [params])
  return (<ViewContent>
    <h3>Membros</h3>
    <S.Container>
    {members?.map((member, index) =>
      <S.WrapperMember key={index}>
        <Member data={member} navigation={navigation}/>
      </S.WrapperMember>
    )}
    </S.Container>
  </ViewContent>)
}