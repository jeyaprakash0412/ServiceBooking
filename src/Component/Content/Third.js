import React,{useState,useEffect} from 'react'
import axios from 'axios'
  

const Third = () => {

const [post,setPost]=useState([])

useEffect(()=>{

      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res=>{
          console.log(res);
          setPost(res.data)
      })
      .catch(err=>{
          console.log(err);
      })
},[]) 

    return (
        <div>
            {post.map(post=>
            <div>key={post.id}{post.title}</div>)}
        </div>
    )
}

export default Third

