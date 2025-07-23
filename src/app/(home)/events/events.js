
'use client'
import { EventItem } from '@/components/EventItem'
import * as S from './style'
import { redirect } from 'next/navigation'

export default function EventsList ({ events }) {
  const handleClick = (eventId) => {
    redirect(`/events/${eventId}`)
  }
  return (<S.Container>
      {Array.from(events.values())?.map((event, index) => <EventItem
        data={event}
        handleClick={handleClick}
        key={index}
        // unavaliable={event.unavaliableMembers.includes(loggedMemberId)}
        // activatedConfig={activatedConfig}
        // handleCheckUnavaliable={changeAvaliableList}
      />)}
    </S.Container>)
}
