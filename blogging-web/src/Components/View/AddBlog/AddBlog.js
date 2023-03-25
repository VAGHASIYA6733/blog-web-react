import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { blogData, blogDatabase, validateBlog } from '../../../config'


const AddBlog = () => {

  const [ newBlog, setNewBlog ] = useState(blogData)

  const { title,desription,category } = newBlog

  const handleChange = (e) => {
    setNewBlog({...newBlog, [e.target.name] : e.target.value})
  }

  const handleUpload = (e) => {
    e.preventDefault();
    const response = validateBlog(newBlog);

    const validation = title&&desription&&category

    if(!validation){
      toast.error("Fill the details")
    } else {
      if(response.isExit){
        toast.warning("Blog Exiting")
      } else{
        blogDatabase.push({...newBlog, date: new Date()});
        setNewBlog(blogData)
        toast.success("Blog Uploaded")
        console.log(blogDatabase);
      }
    }
  }
  
  return (
    <div className='container'>
      <div className="row py-5">
        <div className="col-12 text-center">
          <form action="" onSubmit={handleUpload}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control"  placeholder='Blog Title'onChange={handleChange} name="title" value={title}/>
                <label htmlFor="floatingInput">Title</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control"  placeholder='Blog Description' onChange={handleChange} name="desription" value={desription}/>
                <label htmlFor="floatingPassword">Description</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control"  placeholder='Blog Category' onChange={handleChange} name="category" value={category}/>
                <label htmlFor="floatingPassword">Category</label>
            </div>
            <div className="inputSubmit">
              <button className="btn btn-primary py-2 px-5">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBlog
