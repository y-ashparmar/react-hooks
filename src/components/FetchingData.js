import React, { useEffect, useState } from 'react'
import axios from 'axios'
function FetchingData() {
  const [posts,setPosts] =useState([]);
  const [id, setId]= useState(1);
  const [clickId,setClickId] = useState(1);
  const [addPost, setAddPost] = useState(false);
  const [newPost, setNewPost] = useState({title: "", body: ""});

  console.log("postclickIds",clickId);
  const handlerId =()=>{
    setClickId(id)
  }

  const sendPost = (e)=> {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      body:JSON.stringify(newPost)
    })
    .then(res=>{ 
        console.log("result", res);
    })
    .catch(err => {
      console.log("error",err);
    })
  }

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
      console.log(res.data);
      setPosts(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[clickId])
  return (
    <div>FetchingData
      <div>
        <input type="number" value={id} onChange={e => setId(e.target.value)}/>
        {/* { id > 100 || id < 1 ? <span style={{'color':'red'}} >accept only 1 to 100</span> :"" } */}
        <button onClick={handlerId}>Fatch Data</button>
        <button onClick={()=> setAddPost(preState => !preState)}>add new post</button>
        { addPost && 
          <form onSubmit={sendPost}>
            <label htmlFor='titleText'>Title:-</label>
            <input type='text' name='titleText' onChange={e => setNewPost({...newPost, title: e.target.value}) } />
            <label htmlFor='bodyText'>Description:-</label>
            <input type='text' onChange={e => setNewPost({...newPost, body: e.target.value}) } />
            {/* <button onClick={()=>sendPost()} >send post</button> */}
            <input type="submit" value="send post" />
          </form>
        }
        <h1>Title : {posts.title}</h1>
      </div>
      {/* <table> 
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(post=>( 
               <tr key={post.id} >
                 <td>{post.id}</td>
                 <td>{post.title}</td>
                </tr>
            )
            )
          }
        </tbody>
      </table> */}
    </div>
  )
}

export default FetchingData