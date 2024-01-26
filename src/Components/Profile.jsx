import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseurl'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editUserAPI } from '../Services/allAPI';

function Profile() {
    const [userProfile, setUserProfile] = useState({
        username: "", email: "", password: "", profile: "", github: "", linkedin: ""
    })
    const [existingImage, setExistingImage] = useState("")
    const [preview, setPreview] = useState("")
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setUserProfile({ ...userProfile, username: user.username, email: user.email, password: user.password, profile: "", github: user.github, linkedin: user.linkedin })
        setExistingImage(user.profile)

    }, [open])
    console.log(existingImage);
    useEffect(() => {
        if (userProfile.profile) {
            setPreview(URL.createObjectURL(userProfile.profile))
        } else {
            setPreview("")
        }

    }, [userProfile.profile])

    const handleProfileUpdate = async () => {
        const { username, email, password, profile, github, linkedin } = userProfile
        if (!github || !linkedin) {
            toast.info("Please fill the form completely!!!")

        } else {
            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("password", password)

            reqBody.append("github", github)
            reqBody.append("linkedin", linkedin)
            preview ? reqBody.append("profileImage", profile) : reqBody.append("profileImage", existingImage)
            const token = sessionStorage.getItem("token")
            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}`
                }
                const res = await editUserAPI(reqBody, reqHeader)
                if (res.status == 200) {
                    setOpen(!open)
                    sessionStorage.setItem("existingUser", JSON.stringify(res.data))
                } else {
                    setOpen(!open)
                    console.log(res);
                    console.log(res.response.data);
                }

            } else {
                const reqHeader = {
                    "Content-Type": "application/json", "Authorization": `Bearer ${token}`
                }
                const res = await editUserAPI(reqBody, reqHeader)
                if (res.status == 200) {
                    setOpen(!open)
                    sessionStorage.setItem("existingUser", JSON.stringify(res.data))
                } else {
                    setOpen(!open)
                    console.log(res);
                    console.log(res.response.data);
                }
            }
        }
    }
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
                        <input style={{ display: 'none' }} type="file" onChange={e => setUserProfile({ ...userProfile, profile: e.target.files[0] })} />
                        {
                            existingImage !== "" ?
                                <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="upload picture" /> :
                                <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : `https://cdn-icons-png.flaticon.com/256/3135/3135789.png`} alt="upload picture" />
                        }
                    </label>
                    <div className="mt-3">
                        <input className='form-control' placeholder='GitHub' type="text" value={userProfile.github} onChange={e => setUserProfile({ ...userProfile, github: e.target.value })} />
                    </div>
                    <div className="mt-3">
                        <input className='form-control' placeholder='LinkedIn' type="text" value={userProfile.linkedin} onChange={e => setUserProfile({ ...userProfile, linkedin: e.target.value })} />
                    </div>
                    <div className="btn btn-warning mt-3" onClick={handleProfileUpdate}>
                        Update
                    </div>
                </div>
            </Collapse>
            <ToastContainer position="top-right"
                autoClose={2000} theme="colored" />
        </div>


    )
}

export default Profile