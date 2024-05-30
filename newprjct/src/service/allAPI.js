import  {commonAPI}  from "./commonAPI"
import { serverURL } from "./serverURL"


// upload video

export const uploadMessage = async(reqBody)=>{
      //return the response to Add.jsx component
   return await commonAPI('POST',`${serverURL}/message`,reqBody)
}

export const getAllMessage = async()=>{
    //return the value to View.jsx component
    return await commonAPI('GET',`${serverURL}/message`,'')
 }


export const deleteMessage = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/message/${id}`,{})
 }


//  export const updateMessage = async(id,body)=>{
//     return await commonAPI('PUT',`${serverURL}/message/${id}`,body)
//   }