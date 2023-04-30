import React, { useState } from 'react'

function DetailForm() {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('')
    const [social_account, setSocialAccount] = useState('')
    const [cohort, setCohort] = useState('')
    const [is_active, setIsActive] = useState(true)
    const [privacy, setPrivacy] = useState('')
    const [user_id, setUserId] = useState('')
    const [image, setImage] = useState([])
   

    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData();

        data.append("[name]", name)
        data.append("[email]", email)
        data.append("[social_account]", social_account)
        data.append("[cohort]", cohort)
        data.append("[is_active]", is_active)
        data.append("[privacy]", privacy)
        data.append("[user_id]", user_id)
        data.append("[image]", image)

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

            {/* <label htmlFor="is_active">is_active</label> */}
            <input value={is_active} onChange={(e)=> setIsActive(e.target.value)} type="hidden" name='is_active' id='is_active' />
            <br />

            <label htmlFor="privacy">privacy</label>
            <input value={privacy} onChange={(e)=> setPrivacy(e.target.value)} type="text" name='privacy' id='privacy' />
            <br />


            {/* <label htmlFor="user_id">user_id</label> */}
            <input value={user_id} onChange={(e)=> setUserId(e.target.value)} type="hidden" name='user_id' id='user_id' />
            <br />

            <label htmlFor="image">image</label>
            <input onChange={(e)=> setImage(e.target.files[0])} type="file" name='image' id='image' />
            <br />


            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default DetailForm
