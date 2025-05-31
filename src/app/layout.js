'use client'
import './globals.css'
import { ThemeProvider } from 'styled-components'
import * as S from './style'
import { COLORS } from '@/components/utils'
import { useState } from 'react'
import { DataProvider } from '@/contexts'

export default function RootLayout({ children }) {
  const [members, setMembers] = useState(new Map())
  const [groups, setGroups] = useState(new Map())
  const [scales, setScales] = useState(new Map())
  const [events, setEvents] = useState(new Map())
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
    }}>
      <ThemeProvider theme={{ ...COLORS }}>
        <html lang='pt-Br'>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          <S.Body>
            {children}
          </S.Body>
        </html>
      </ThemeProvider>
    </DataProvider.Provider>
  )
}
