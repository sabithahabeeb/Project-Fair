import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { addProjectAPI } from '../Services/allAPI';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProjectResponseContext } from '../Context/ContextShare';

function AddProject() {
    const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext)
    const [show, setShow] = useState(false);
    const [projectDetails, setProjectDetails] = useState({
        title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
    })

    const [preview, setPreview] = useState("")
    const [token, setToken] = useState("")
    const handleClose = () => {
        setShow(false);
        setProjectDetails({
            title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
        })
        setPreview("")
    }
    const handleShow = () => setShow(true);
    console.log(projectDetails);
    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }

    }, [projectDetails.projectImage])

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        } else {
            setToken("")
        }
    }, [])

    const handleAdd = async (e) => {
        e.preventDefault()
        const { title, languages, overview, projectImage, github, website } = projectDetails
        if (!title || !languages || !overview || !projectImage || !github || !website) {
            alert("Please fill the form completely!!!")
        } else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("languages", languages)
            reqBody.append("overview", overview)
            reqBody.append("projectImage", projectImage)
            reqBody.append("github", github)
            reqBody.append("website", website)

            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await addProjectAPI(reqBody, reqHeader)
                if (result.status === 200) {
                    console.log(result.data);
                    handleClose()
                    setAddProjectResponse(result.data)
                } else {
                    console.log(result);
                    toast.warning(result.response.data);
                }
            }

        }

    }
    return (
        <>
            <Button onClick={handleShow} className='btn btn-info'>AddProject</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>
                                <input type="file" style={{ display: 'none' }} onChange={e => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
                                <img className='img-fluid' src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s"} alt="" />
                            </label>


                        </div>
                        <div className="col-lg-6">
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Project Title'
                                    value={projectDetails.title} onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Language Used' value={projectDetails.languages} onChange={e => setProjectDetails({ ...projectDetails, languages: e.target.value })} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Github Link' value={projectDetails.github} onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website} onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview} onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })} />
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-right"
                autoClose={2000} theme="colored" />
        </>
    )
}

export default AddProject