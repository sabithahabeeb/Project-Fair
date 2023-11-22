import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// register
export const registerAPI = async (user) => {
    return await commonAPI("POST", `${BASE_URL}/user/register`, user, "")
}

// login
export const loginAPI = async (user) => {
    return await commonAPI("POST", `${BASE_URL}/user/login`, user, "")
}

// add project
export const addProjectAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${BASE_URL}/project/add`, reqBody, reqHeader)
}


// home projects
export const homeProjectAPI = async ()=>{
         return await commonAPI("GET",`${BASE_URL}/projects/home-project`,"","")
}

// allproject
export const allProjectsAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all?search=${searchKey}`,"",reqHeader)

}

// userproject
export const userProjectAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-projects`,"",reqHeader)
}