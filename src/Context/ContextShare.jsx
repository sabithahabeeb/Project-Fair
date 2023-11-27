import React, { createContext, useState } from 'react'
export const addProjectResponseContext = createContext()
export const editProjectResposeContext = createContext()

function ContextShare({ children }) {
    const [addProjectResponse, setAddProjectResponse] = useState({})
    const [editProjectResponse, setEditProjectResponse] = useState({})
    return (
        <>
            <addProjectResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
                <editProjectResposeContext.Provider value={{ editProjectResponse, setEditProjectResponse }}>
                    {children}
                    </editProjectResposeContext.Provider > </addProjectResponseContext.Provider> 
           
          
        </>

    )
}

export default ContextShare

