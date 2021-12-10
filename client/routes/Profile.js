import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  let params =useParams();

  // create call to backend for user information
  // populate page with user info  
  return (
    <div>
      <p>Username: {params.username}</p>
    </div>
  )
}

export default Profile;