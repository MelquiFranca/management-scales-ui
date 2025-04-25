import { useEffect, useState } from 'react'
import * as S from './style'

const messagesMock = [
  {
    content: 'Oi Sunda',
    id: '1',
    date: '24/04/2025'
  },
  {
    content: 'Teste https://www.teste.com.br!',
    id: '2',
    date: '25/04/2025'
  },
  {
    content: 'Beleza, Bar ',
    id: '3',
    date: '25/04/2025'
  },
]

export default function DialogMessage ({ messages = messagesMock, visible, setVisible }) {
  const [mapMessages, setMapMessages] = useState(new Map())
  const handleVisible = () => setVisible(!visible)
  useEffect(() => {
    const updatedMapMessages = new Map()
    messages.forEach((message) => {
      if (updatedMapMessages.has(message.date)) {
        const actualMessages = updatedMapMessages.get(message.date)
        return updatedMapMessages.set(message.date, [...actualMessages, message])
      }
      updatedMapMessages.set(message.date, [message])
    })
    setMapMessages(updatedMapMessages)
  }, [messages])
  return visible && <S.Container>
    <S.ContentMessages>
      {Array.from(mapMessages.keys()).map(date => {
        const data = mapMessages.get(date).map(({ content, id }) => <S.Message key={id}>
          {content}
        </S.Message>)
        return ([<S.SplitDate>{date}</S.SplitDate>, ...data])
      })}
    </S.ContentMessages>
    <S.ContainerActions>
      <S.CloseButton onClick={handleVisible}>Sair</S.CloseButton>
      <S.InputText placeholder='Mensagem'></S.InputText>
      <S.SendButton>Enviar</S.SendButton>
    </S.ContainerActions>
  </S.Container>
}