import React from 'react'
import { useParams } from 'react-router-dom'

export const Userdel = () => {
    const {userId}=useParams()
  return (
    <div>
        details of usr {userId}
    </div>
  )
}
