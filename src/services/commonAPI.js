import axios from "axios"

const commonAPI = async(url,httpMethod,reqBody)=>{
    const reqConfig = {
        url,
        method:httpMethod,
        data:reqBody
    }
    return await axios(reqConfig).then(res=>res).catch(err=>err)
}

export default commonAPI