import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseurl'

function Profile() {
    const [userProfile,setUserProfile] = useState({
        username: "", email: "", password: "",  Profile:"",github:"",linkedin:""
    })
    const [existingImage,setExistingImage] = useState("")
    const [preview,setPreview] = useState("")
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        if(user.Profile!==""){
            setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,Profile:"",github:user.github,linkedin:user.linkedin})
            setExistingImage(user.Profile)

        }else{
            setExistingImage("https://cdn-icons-png.flaticon.com/512/3135/3135715.png")

        }

    },[])

    useEffect(()=>{
        if(userProfile.Profile){
            setPreview(URL.createObjectURL(userProfile.Profile))
        }else{
            setPreview("")
        }

    },[userProfile.Profile])
    return (
     
            <div className='  m-5  p-5  '>
                <div className='d-flex border rounded p-3  justify-content-between'>
                    <h2>Profile</h2>
                    <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i className="fa-solid fa-angle-down fa-beat-fade"></i></button>
                </div>
                <Collapse in={open}>
                    <div className='row shadow p-5 justify-content-center mt-3'>
                        {/* upload picture */}
                        <label className='text-center'>
                            <input style={{ display: 'none' }} type="file" onChange={e=>setUserProfile({...userProfile,Profile:e.target.files[0]})} />
                            <img width={'200px'} height={'200px'} className='rounded-circle' src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} alt="upload picture" />
                        </label>
                        <div className="mt-3">
                            <input className='form-control' placeholder='GitHub' type="text" value={userProfile.github}  onChange={e=>setUserProfile({...userProfile,github:e.target.value})}/>
                        </div>
                        <div className="mt-3">
                            <input className='form-control' placeholder='LinkedIn' type="text" value={userProfile.linkedin}  onChange={e=>setUserProfile({...userProfile,linkedin:e.target.value})}/>
                        </div>
                        <div className="btn btn-warning mt-3">
                           Update
                        </div>
                    </div>
                </Collapse>
            </div>

        
    )
}

export default Profile