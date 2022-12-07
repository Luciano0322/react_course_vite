import React, { FC } from 'react'
import { useParams } from 'react-router-dom';

const PantWid: FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>pant {id}</h1>
    </div>
  )
}

export default PantWid
