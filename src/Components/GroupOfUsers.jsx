import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupOfUsers({...props}) {
  return (
    <AvatarGroup     max={4}
    {...props}
    slotProps={{
      additionalAvatar: {
        sx: {
          width: 24,
          height: 24,
          fontSize: '0.75rem', // Adjust the font size if you want to reduce it further
        },
      },
    }} >
      <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/4.jpg"    sx={{ width: 24, height: 24, fontSize: '0.75rem' }}/>
      <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/3.jpg"   sx={{ width: 24, height: 24, fontSize: '0.75rem' }} />
      <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/5.jpg"   sx={{ width: 24, height: 24, fontSize: '0.75rem' }} />
      <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/men/6.jpg"   sx={{ width: 24, height: 24, fontSize: '0.75rem' }} />
      <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/men/8.jpg"   sx={{ width: 24, height: 24, fontSize: '0.75rem' }} />
    </AvatarGroup>
  );
}
