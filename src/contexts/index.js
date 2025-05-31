import { createContext } from 'react'

export const DataProvider = createContext({
  members: new Map(),
  setMembers: () => {},
  groups: new Map(),
  setGroups: () => {},
  scales: new Map(),
  setScales: () => {},
  events: new Map(),
  setEvents: () => {},
})