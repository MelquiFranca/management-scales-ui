'use client'
import Header from '@/components/Header'
import * as S from './style'
import MenuBar from '@/components/MenuBar'
import { useContext } from 'react'
import { DataProvider } from '@/contexts'

export default function Layout ({ children }) {
  const { groups,
    activatedGroupId,
    user,
    activatedMenu,
    setActivatedMenu
  } = useContext(DataProvider)
  // useEffect(() => {
  //   worker.postMessage({ type: 'loggedMember', loggedMember })
  //   console.log('Configurações de socket realizadas com sucesso')
  // }, [groupId])
  return <S.Container>
    <Header
      groups={groups}
      user={user}
      activatedGroupId={activatedGroupId}
    />
    {children}
    <MenuBar
      activatedMenu={activatedMenu}
      setActivatedMenu={setActivatedMenu}
    />
  </S.Container>
}
