import React, { useState } from 'react'

function DetailForm() {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('')
    const [social_account, setSocialAccount] = useState('')
    const [cohort, setCohort] = useState('')
    const [certificate, setCertificate] = useState('')
    const [privacy, setPrivacy] = useState('')
    const [profile_picture, setProfilePicture] = useState('')
    const [user_id, setUserId] = useState('')
    const [votes, setVotes] = useState('')
    const [image, setImage] = useState([])
    const [pictures, setPictures] = useState([])   

    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData();

        data.append("[name]", name)
        data.append("[email]", email)
        data.append("[social_account]", social_account)
        data.append("[cohort]", cohort)
        data.append("[certificate]", certificate)
        data.append("[privacy]", privacy)
        data.append("[profile_picture]", profile_picture)
        data.append("[user_id]", user_id)
        data.append("[votes]", votes)
        data.append("[image]", image)
        data.append("[pictures]", pictures)
        submitToApi(data)
    }

    function submitToApi(data){
        fetch('/details', {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

  return (
    <div>
        <h1>File Form</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name='name' id='name' />
            <br />

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name='email' id='email' />
            <br />

            <label htmlFor="social_account">social_account</label>
            <input value={social_account} onChange={(e)=> setSocialAccount(e.target.value)} type="text" name='social_account' id='social_account' />
            <br />

            <label htmlFor="cohort">cohort</label>
            <input value={cohort} onChange={(e)=> setCohort(e.target.value)} type="text" name='cohort' id='cohort' />
            <br />

            <label htmlFor="certificate">certificate</label>
            <input value={certificate} onChange={(e)=> setCertificate(e.target.value)} type="text" name='certificate' id='certificate' />
            <br />

            <label htmlFor="privacy">privacy</label>
            <input value={privacy} onChange={(e)=> setPrivacy(e.target.value)} type="text" name='privacy' id='privacy' />
            <br />

            <label htmlFor="profile_picture">profile_picture</label>
            <input value={profile_picture} onChange={(e)=> setProfilePicture(e.target.value)} type="text" name='profile_picture' id='profile_picture' />
            <br />

            <label htmlFor="user_id">user_id</label>
            <input value={user_id} onChange={(e)=> setUserId(e.target.value)} type="text" name='user_id' id='user_id' />
            <br />

            <label htmlFor="votes">votes</label>
            <input value={votes} onChange={(e)=> setVotes(e.target.value)} type="text" name='votes' id='votes' />
            <br />

            <label htmlFor="image">image</label>
            <input onChange={(e)=> setImage(e.target.files[0])} type="file" name='image' id='image' />
            <br />

            <label htmlFor="pictures">pictures</label>
            <input  onChange={(e)=> setPictures(e.target.files[0])} type="file" name='pictures' id='pictures' />
            <br />

            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default DetailForm
