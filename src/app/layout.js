'use client'
import './globals.css'
import { ThemeProvider } from 'styled-components'
import * as S from './style'
import { COLORS } from '@/components/utils'
import { useState, useEffect, Suspense } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { DataProvider } from '@/contexts'
import { getTokenData, verifyLocalTokenValidation } from '@/commons/authentication'
import Loading from './loading'
import { getEvents, getMembers, getScales } from '@/commons/api'

export default function RootLayout({ children }) {
  const [members, setMembers] = useState(new Map())
  const [groups, setGroups] = useState(new Map())
  const [activatedGroupId, setActivatedGroupId] = useState(null)
  const [activatedMenu, setActivatedMenu] = useState(0)
  const [scales, setScales] = useState(new Map())
  const [events, setEvents] = useState(new Map())
  const [user, setUser] = useState({})
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    const validateToken = async () => {
      const isLogged = verifyLocalTokenValidation()
      if (!isLogged) return router.push('/login')
      if (pathname === '/') return router.push('/scales')
      const { payload } = getTokenData()
      const [members, scales, events] = await Promise.all([
        getMembers(),
        getScales(),
        getEvents()
      ])
      setUser(payload)
      setActivatedGroupId(payload.groupsData[0]._id)
      setGroups(new Map(payload.groupsData.map(group => [group._id, group])))
      setMembers(new Map(members.map(member => [member._id, member])))
      setScales(new Map(scales.map(scale => [scale._id, scale])))
      setEvents(new Map(events.map(event => [event._id, event])))
    }
    validateToken()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <DataProvider.Provider value={{
      members,
      setMembers,
      groups,
      setGroups,
      scales,
      setScales,
      events,
      setEvents,
      user,
      setUser,
      activatedGroupId,
      setActivatedGroupId,
      activatedMenu,
      setActivatedMenu
    }}>
      <ThemeProvider theme={{ ...COLORS }}>
        <html lang='pt-Br'>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          <S.Body>
            <Suspense fallback={Loading()}>
              {children}
            </Suspense>
          </S.Body>
        </html>
      </ThemeProvider>
    </DataProvider.Provider>
  )
}
