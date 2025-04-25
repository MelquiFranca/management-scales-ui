'use client'
import Header from '@/components/Header'
import * as S from './style'
import MenuBar from '@/components/MenuBar'
import ImageMock from '../../../public/assets/icon.png'

const mockGroup = {
  name: 'Group Bobra'
}
const mockUser = {
  name: 'Sunda Foo'
}
export default function HomeLayout ({ children }) {
  // const { setActiveScreen } = useContext(HandleCreateContext)
  // const { loggedMember } = useContext(HandleLoadLoggedMembersContext)
  // const { type, groupId } = loggedMember
  // useEffect(() => {
  //   worker.postMessage({ type: 'loggedMember', loggedMember })
  //   console.log('Configurações de socket realizadas com sucesso')
  // }, [groupId])
  return <S.Container>
    <Header groups={[mockGroup, mockGroup]} user={mockUser} />
    {children}
    <MenuBar />
  </S.Container>
}
