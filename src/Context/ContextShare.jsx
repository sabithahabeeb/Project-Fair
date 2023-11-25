import React, { createContext, useState } from 'react'
export const addProjectResponseContext = createContext()
export const editProjectResposeContext = createContext()

function ContextShare({ children }) {
    const [addProjectResponse, setAddProjectResponse] = useState({})
    const [editProjectResponse, setEditProjectResponse] = useState({})
    return (
        <>
            <addProjectResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
                {children}
            </addProjectResponseContext.Provider>
            <editProjectResposeContext.Provider value={{ editProjectResponse, setEditProjectResponse }}>
                {children}
            </editProjectResposeContext.Provider>
        </>

    )
}

export default ContextShare

