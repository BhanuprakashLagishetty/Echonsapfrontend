import React from 'react'
import WrappedNotificationPage from './WrappedNotificationPage'
import MiniDrawer from '../../Components/Home'

export default function NotificationPage() {
  return (
    <>

        <MiniDrawer component={<WrappedNotificationPage/>}/>
    </>
  )
}
