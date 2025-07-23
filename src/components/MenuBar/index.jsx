import * as S from './style'
import { useRouter } from 'next/navigation'

const menuItems = [
  { label: 'Escalas', pathname: '/scales' },
  { label: 'Membros', pathname: '/members' },
  { label: 'Eventos', pathname: '/events' },
]
const MenuBar = ({ activatedMenu, setActivatedMenu }) => {
  const router = useRouter()
  const handleClick = (index, pathname) => {
    if (index === activatedMenu) return
    setActivatedMenu(index)
    router.push(pathname)
  }
  return <S.Container>
    {menuItems.map((menuItem, index) => 
      <S.Button
        key={index}
        onClick={() => handleClick(index, menuItem.pathname)}
        activatedMenu={activatedMenu === index}
      >
        {menuItem.label}
      </S.Button>
    )}
  </S.Container>
}

export default MenuBar
