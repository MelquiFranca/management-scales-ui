import { useContext, useEffect, useState } from 'react'
// import { useAsyncStorage } from '@react-native-async-storage/async-storage'
// import Icons from 'react-native-vector-icons/FontAwesome5'
// import { loadDataStorage } from '../../utils'
// import DeleteButton from './DeleteButton'
// import { HandleLoadLoggedMembersContext } from '../contexts'
import * as S from './style'
import { FUNCTIONS_ICONS } from '../utils'
import Member from '../Member'

export default function FunctionMembers ({ functionName, memberIds, editable = false, handleRemove, highlightMember }) {
  // const { getItem } = useAsyncStorage('@members')
  // const { groups: [firstGroup] } = useContext(HandleLoadLoggedMembersContext)
  // const { functionsData = FUNCTIONS_ICONS } = firstGroup
  const { icon, name } = FUNCTIONS_ICONS[functionName]
  const [members, setMembers] = useState([{
    _id: '123',
    photo: '',
    name: 'Sunda'
  }])
  // useEffect(() => loadDataStorage({ get: getItem, set: setMembers }), [])
  return <S.Container>
    <S.ContentInline>
      {
        // icon
        // ? 
        <S.WrapperIcon>
            {/* <Icons name={icon} size={20} color={COLORS.secondaryFont}/> */}
          </S.WrapperIcon>
        // : <Icons name='people' size={20} color={COLORS.secondaryFont}/>
      }{name}
    </S.ContentInline>
    {memberIds?.map((memberId, index) => {
      const dataMember = members?.find(dataMember => memberId === dataMember._id.toString())
      return <S.WrapperMember key={index}>
        <Member data={dataMember} activeAction={false} highlight={highlightMember}/>
        {/* {editable && <DeleteButton handleClick={() => handleRemove(dataMember._id, true)} />} */}
      </S.WrapperMember>
    })}
  </S.Container>
}
