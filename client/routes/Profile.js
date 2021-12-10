import React, { useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

const Profile = () => {
  let params =useParams();
  let navigate = useNavigate();
  // create call to backend for user information
  // populate page with user info  
 
      // expecting this to be an objest with this format :
       // { nickname: 'Joe Blow' aboutMe: 'I am a chat app user!' })
  let userAbout = 'no info yet'
  let userNickname = 'no nickname'
  useEffect(() => {
    fetch(`/api/profiles/${params.username}`)
    .then(res => res.json())
    .then((userData) => {
      console.log(userData)
      userAbout = userData.about_me;
      userNickname = userData.nickname;
    })
  })

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
  if (params.username === getCookie('username')) {
    editProfile = <button onClick={() => navigate('edit')}>Edit Profile</button>
  }
    // editIfAllowed could be link to edit profile.... to a page with a form to edit your user profile and submit information
  
    return (
      <div>
        <p>Username: {params.username}</p>
        <p>AKA: {userNickname}</p>
        <p>About: {userAbout}</p>
        <button onClick={() => navigate('/chatroom')}>Back To Chat</button>
        <br></br>
        {editProfile}
        <Outlet />
    </div>
  )
}

export default Profile;