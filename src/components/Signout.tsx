"use client"

import React from 'react'
import Button from './ui/Button'
import { signOut } from 'next-auth/react'

function Signout() {
  return (
    <Button onClick={() => signOut()}>Sign out</Button>
  )
}

export default Signout