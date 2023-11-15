import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

function Profile() {
    const [open, setOpen] = useState(false);
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
                            <input style={{ display: 'none' }} type="file" />
                            <img width={'200px'} height={'200px'} className='rounded-circle' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="upload picture" />
                        </label>
                        <div className="mt-3">
                            <input className='form-control' placeholder='GitHub' type="text" />
                        </div>
                        <div className="mt-3">
                            <input className='form-control' placeholder='LinkedIn' type="text" />
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