import React from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';

const ProfileContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

// load when you navigate to /profiles/:username
// if it's your profile, you shoul be able to edit it
  // if username parameter matches username in cookies, it's your profile
// otherwise you should just see the contents

// should render an about me section
// and a nickname
// and a button to go back to chat
// and a logout button

export default ProfileContainer