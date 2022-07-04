import React from 'react';
import { useState, useEffect } from 'react';
import { GET } from '../Components/api_links/Axios';
import { DELETE } from '../Components/api_links/Axios';
import endpoints from './api_links/endpoints';
import Posts from '../Components/PostSpecs/Posts';
import PostContent from '../Components/PostSpecs/PostContent';


function Content () {
    const [posts, setPosts] = useState([])
    const Token = localStorage.getItem('Token')
    const user = localStorage.getItem('user')
    const userId = JSON.parse(user)
    const [data, setErrorMessage] = useState("")

async function loadPosts() {
   GET(endpoints.GET_ALL_POSTS, {
      // userId: userId,
      // postId: data.postId,
      // content: data.commentMessage,
    })
    .then (resPost => {
    // if (resPost.status === 200) {
    //   setErrorMessage("Posts trouvés!")
    // }
    posts = resPost.data
    if (resPost.status === 400) {
      setErrorMessage("Posts non trouvés!")
    }
    if (resPost.status === 200) {
      setErrorMessage("Posts trouvés!")
    }
  })
  .catch (error => {

  });
  }

useEffect(() => {
  loadPosts()
}, [Token, setPosts, userId]) 
const createNewPost = () => {
  window.location.reload()
}

function deletePost(id) {


const data = posts.filter(post => post.id !== id);
const delPosts = DELETE(endpoints.DELETE_POST, {
userId: data.userId,
postId: data.postId,
content: data.commentMessage,
})
if (delPosts.status === 500) {
setErrorMessage("Post non trouvé!");
}
if (delPosts.status === 400) {
setErrorMessage("Echec de suppression");
}
if (delPosts.status === 200) {
setErrorMessage("Post supprimé!");
window.location.reload()
}

}

return (
<main className="main">
    <div className="feed">
        <div className='post'>
<Posts addPost={createNewPost}></Posts>
</div>
            <h1> Nouvelles publications:</h1>

{posts.map(post => (
<div className="allPosts" key={post.id}>
<PostContent post={post}
deletePost={() => deletePost(post.id)} />
</div>
))}

</div>
</main>
);

}




export default Content;

//useEffects nous permet de recharger la page avec les infos modifiées