'use client'
import { useState } from 'react'
import ViewContent from '@/components/ViewContent'
import * as S from './style'
import FieldInput from '@/components/FieldInput'
import SeparatorContext from '@/components/SepatatorContext'
import DeleteButton from '@/components/DeleteButton'

export default function Page ({}) {
  const [functionName, setFunctionName] = useState('')
  const [selectedIcon, setSelectedIcon] = useState('')
  const [activatedFunctions, setActivatedFunctions] = useState([
    { name: 'Funcao 1' },
    { name: 'Funcao 2' },
    { name: 'Funcao 3' },
    { name: 'Funcao 1' },
    { name: 'Funcao 2' },
    { name: 'Funcao 3' },
  ])
  const listIcons = ['icon 1', 'icon 2']
  // const handleSelectFunction = ({ target: { value }}) => setActivatedFunctions([...activatedFunctions, value])
  return (<ViewContent allDisplay>
    <S.Container>
      <SeparatorContext label='Funções para escala' />
      <FieldInput
        iconName=''
        label='Nome' setValue={setFunctionName} value={functionName}/>
      <FieldInput
        iconName=''
        label='Icone'>
        <S.Select onChange={({ target: { value }}) => setSelectedIcon(value)} value={selectedIcon}>
          <S.Option value=''>Selecione...</S.Option>
          {listIcons.map((icon, index) => <S.Option key={index} value={index}>{icon}</S.Option>)}
        </S.Select>
      </FieldInput>
      <FieldInput
        iconName=''
        label='Ativas'>
        <S.ActivatedFunctionsBlock>
          {activatedFunctions.map(({ name }, index) => <S.ActivatedFunction key={index}>
            <S.Checkbox value={name}></S.Checkbox>
            {name}
          </S.ActivatedFunction>)}
        </S.ActivatedFunctionsBlock>
        <DeleteButton
          // handleClick={() => setModalAlertVisible(true)}
          label='Remover Funções'
        />
      </FieldInput>
      
      <br/>
      <SeparatorContext label='Outras' />
    </S.Container>
  </ViewContent>)
}