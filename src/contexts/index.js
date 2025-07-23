'use client'
import { createContext } from 'react'

export const contentContext = {
  members: new Map(),
  setMembers: () => {},
  groups: new Map(),
  setGroups: () => {},
  scales: new Map(),
  setScales: () => {},
  events: new Map(),
  setEvents: () => {},
  user: {},
  setUser: () => {},
  activatedGroupId: null,
  setActivatedGroupId: () => {},
  activatedMenu: 0,
  setActivatedMenu: () => {}
}

export const DataProvider = createContext(contentContext)