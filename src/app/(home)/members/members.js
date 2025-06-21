'use client'
import { use, useContext, useEffect } from 'react'
import Member from '@/components/Member'
import ViewContent from '@/components/ViewContent'
import * as S from './style'
import { redirect } from 'next/navigation'
import { DataProvider } from '@/contexts'

export default function Members ({ members }) {
  const allMembers = use(members)
  const { setMembers, members: membersContext } = useContext(DataProvider)
  const handleClick = (memberIndex) => {
    redirect(`/members/${allMembers[memberIndex]._id}`)
  }
  useEffect(() => {
    if (!membersContext.size) {
      const membersMap = new Map(allMembers.map(member => [member._id, member]))
      setMembers(membersMap)
    }
  }, [membersContext, setMembers, allMembers])
  return (<ViewContent>
    <S.Container>
    {[...membersContext.values()]?.map((member, index) =>
      <S.WrapperMember key={index}>
        <Member data={member} handleClick={() => handleClick(index)}/>
      </S.WrapperMember>
    )}
    </S.Container>
  </ViewContent>)
}