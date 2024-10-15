import { Avatar, Box } from '@mui/material'
import React from 'react'
import MiniDrawer from '../../Components/Home'
import WrappedProfilePage from './WrappedProfilePage'

export default function Userprofile() {
  return (
    <>
    <MiniDrawer component={<WrappedProfilePage/>} />  
    </>
  )
}
