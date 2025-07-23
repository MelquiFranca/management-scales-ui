'use client'
import * as S from './style'
import { redirect } from 'next/navigation'
import CardScale from '@/components/CardScale'

export default function Scales ({ scales, setVisibleMessages }) {
  const handleClick = (scaleId) => {
    redirect(`/scales/${scaleId}`)
  }
  return(<S.Container>
      {Array.from(scales.values()).map((scale, key) => 
        <S.WrapperScale key={key}>
          <CardScale
            {...scale}
            event={[]?.find(c => c._id === scale.eventId)} // TO DO
            annotations={scale.annotations}
            handleClick={handleClick}
            editable={true}
            membersEditable={false}
            highlightMember={true}
            handleVisibleMessages={setVisibleMessages}
          />
        </S.WrapperScale>
      )}
    </S.Container>)
}