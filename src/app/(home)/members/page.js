'use client'
import { Suspense } from 'react'
import Members from './members'
import Loading from './loading'
import { useContext } from 'react'
import { DataProvider } from '@/contexts'

export default function Page () {
  const { members } = useContext(DataProvider)
  return (<Suspense fallback={Loading()}>
    <Members members={members} />
  </Suspense>)
}