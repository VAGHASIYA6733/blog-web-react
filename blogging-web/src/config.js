export const blogData = {
    title:"",
    desription:"",
    category:""
}

export const blogDatabase = []

export const validateBlog = (blog) => {
    try{
        const response = blogDatabase.filter((vlog) => vlog.title === blog.title);
        if(response.length > 0){
            return{
                validation:"error",
                isExit:true
            }
        } else{
            return{
                    validation:"success",
                    isExit:false
            }
        }
    } catch(error){
        return{
            error:"Found",
            errorCode:"1004"
        }
    }
}
