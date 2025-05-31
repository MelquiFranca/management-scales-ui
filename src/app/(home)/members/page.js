import { Suspense } from 'react'
import Members from './members'
import Loading from './loading'
import { getMembers } from '@/api'

export default function Page () {
  const members = getMembers()
  return (<Suspense fallback={Loading()}>
    <Members members={members} />
  </Suspense>)
}