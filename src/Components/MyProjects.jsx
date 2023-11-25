import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { deleteProjectAPI, userProjectAPI } from '../Services/allAPI'
import { toast } from 'react-toastify'
import { addProjectResponseContext, editProjectResposeContext } from '../Context/ContextShare'
import { Alert } from 'react-bootstrap'
import EditProject from './EditProject'

function MyProjects() {
    const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext)
    const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResposeContext)
    const [userProjects, setUserProjects] = useState([])
    const getUserProjects = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}`
            }
            const result = await userProjectAPI(reqHeader)
            if (result.status === 200) {
                setUserProjects(result.data)
            } else {
                console.log(result);
                toast.warning(result.response.data)
            }
        }
    }

    useEffect(() => {
        getUserProjects()
    }, [addProjectResponse,editProjectResponse])

    const handleDelete = async (id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `Bearer ${token}`
        }
        const result = await deleteProjectAPI(id,reqHeader)
        if(result.status===200){
            // page reloded
            getUserProjects()
        }else{
            toast.error(result.response.data)
        }
    }
    return (
        <>
            <div className="card shadow p-3 mt-3">
                <div className='d-flex '>
                    <h2>My Projects</h2>
                    <div className="ms-auto">
                        <AddProject />
                    </div>
                </div>
                {
                    addProjectResponse.title ? <Alert className='text-success fw-bold' dismissible><span>{addProjectResponse.title}</span> added succesfully!!!</Alert> : null
                }
                <div className="mt-4">
                    {/* collection of user projects */}


                    {userProjects?.length > 0 ? userProjects.map(project => (
                        <div className="border d-flex align-items-center mb-3 rounded p-2">
                            <h5>{project.title}</h5>
                            <div className="icon ms-auto d-flex">
                                <EditProject project={project} />
                                <a href={`${project.github}`} target='_blank' className="btn"><i className="fa-brands fa-github fa-2x"></i></a>
                                <button className="btn"><i className="fa-solid fa-trash fa-2x"></i></button>

                            </div>

                        </div>
                    )) :
                        <p className='text-danger fw-bolder fs-5'>No projects Uploaded yet!!!</p>
                    }


                </div>
            </div>

        </>
    )
}

export default MyProjects