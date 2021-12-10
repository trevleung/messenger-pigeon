import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProfile = () => {
  let params = useParams();
  let navigate = useNavigate();

  // SEND PROFILE INFO TO SERVER
  function send() {
    const username = params.username
    fetch(`/api/profiles/${username}`, {
      method: 'PATCH',
      body: JSON.stringify({ nickname: document.getElementById('nickname').value, aboutMe: document.getElementById('aboutMe').value}),
      headers: { 'Content-Type': 'application/json' },
    })
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <p>Username: {params.username}</p>
      <input id="nickname" type="text" placeholder="what do you like to be called?"></input>
      <input id="aboutMe" type="textArea" placeholder='tell us about yourself'></input>
      <br></br>
      <button onClick={send}>Save Changes</button>
      <br></br>
      <br></br>
      <button onClick={() => navigate(`/chatroom/profiles/${params.username}`)}>Back To Profile</button>
      <button onClick={() => navigate('/chatroom')}>Back To Chat</button>
    </div>
  )
}

export default EditProfile;