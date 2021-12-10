import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProfile = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [profileInfo, updateInfo] = useState({ about: 'no info yet', nickname: 'no nickname'})

  // SEND PROFILE INFO TO SERVER
  function send() {
    const username = params.username
    fetch(`/api/profiles/${username}`, {
      method: 'PATCH',
      body: JSON.stringify({ nickname: document.getElementById('nickname').value, aboutMe: document.getElementById('aboutMe').value}),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="profilePage">
      <p>Username: {params.username}</p>
      <input id="nickname" className="textInput" type="text" placeholder="what do you like to be called?"></input>
      <input id="aboutMe" className="textInput" type="textArea" placeholder='tell us about yourself'></input>
      <br></br>
      <button className="typicalButton" onClick={send}>Save Changes</button>
    </div>
  )
}

export default EditProfile;