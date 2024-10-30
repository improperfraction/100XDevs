import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function TotalAvatars() {
  return (
    <AvatarGroup total={24}>
      <Avatar alt="Remy Sharp" src="" />
      <Avatar alt="Travis Howard" src="/assets/CATpicfinal.jpg" />
      <Avatar alt="Agnes Walker" src="/assets/CATpicfinal.jpg" />
      <Avatar alt="Trevor Henderson" src="/assets/CATpicfinal.jpg" />
    </AvatarGroup>
  );
}