import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet} from 'react-router-dom';

const Profile = () => {
  let params =useParams();
  let navigate = useNavigate();
  const [profileInfo, updateInfo] = useState({ about: 'no info yet', nickname: 'no nickname'})
  
  // usestate to set the above values, and update them in the useEffect hook

  useEffect(() => {
    console.log(`fetching /api/profiles/${params.username}`)
    fetch(`/api/profiles/${params.username}`)
    .then(res => res.json())
    .then((userData) => {
      console.log(userData)
      updateInfo({about: userData.about_me, nickname: userData.nickname})
    })
  }, []);

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  let editProfile = <div></div>
  console.log(params)
  console.log(params.user)
  console.log(params.username)
  if (params.username === getCookie('username')) {
    editProfile = <button class="typicalButton" onClick={() => navigate('edit')}>Edit Profile</button>
  }
    // editIfAllowed could be link to edit profile.... to a page with a form to edit your user profile and submit information
    
  return (
    <div className="profilePage">
      <p><strong>Username:</strong> {params.username}</p>
      <p><strong>AKA:</strong> {profileInfo.nickname}</p>
      <p><strong>About:</strong> {profileInfo.about}</p>
      <button className="typicalButton" onClick={() => navigate('/chatroom')}>Back To Chat</button>
      <br></br>
      {editProfile}
      <Outlet />
  </div>
  )
}

export default Profile;