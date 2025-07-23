'use client'
import Member from '@/components/Member'
import ViewContent from '@/components/ViewContent'
import * as S from './style'
import { redirect } from 'next/navigation'

export default function Members ({ members }) {
  const handleClick = (memberId) => {
    redirect(`/members/${memberId}`)
  }
  return (<ViewContent>
    <S.Container>
    {Array.from(members.values()).map((member, index) =>
      <S.WrapperMember key={index}>
        <Member data={member} handleClick={() => handleClick(member._id)}/>
      </S.WrapperMember>
    )}
    </S.Container>
  </ViewContent>)
}