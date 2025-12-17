import commonAPI from "./commonAPI";
import serverURL from "./serverURL";

// add task
export const addTask = async(task)=>{
    return await commonAPI(`${serverURL}/task`,"POST",task)
}

// get all task
export const getAllTask = async()=>{
    return await commonAPI(`${serverURL}/task`,"GET")
}

// delete task by id
export const deleteTask = async(taskID)=>{
    return await commonAPI(`${serverURL}/task/${taskID}`,"DELETE")
}