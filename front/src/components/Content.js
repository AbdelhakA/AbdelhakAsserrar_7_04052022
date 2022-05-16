import React from 'react';
import { useState, useEffect } from 'react';
import { DELETE } from '../components/api_links/Axios';
import { GET } from '../components/api_links/Axios';
import endpoints from '../components/api_links/endpoints';
import PostContent from '../components/PostSpecs/PostContent';
import '../components/PostSpecs/Posts';

function Content () {
    const commentMessage = commentMessage
    const [posts, setPosts] = useState([])
    const Token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    const userId = JSON.parse(user).id 
    const [errorData, setErrorData] = useState("")

async function loadPosts() {
    const resPost = GET(endpoints.GET_ALL_POSTS, {
      userId: userId,
      postId: postId,
      content: commentMessage,
    })
    if (resPost.status === 400) {
      setErrorData("Posts non trouvés!")
    }
    if (resPost.status === 200) {
      setErrorData("Posts trouvés!")
    }
  }

useEffect(() => {loadPosts()}, [Token, setPosts, userId]) //useEffects nous permet de recharger la page avec les infos modifiées
const createNewPost = () => {window.location.reload()
}

function deletePost(id) {


const data = posts.filter(post => post.id != id);
const delPosts = DELETE(endpoints.DELETE_POST, {
userId: data.userId,
postId: data.postId,
content: data.commentMessage,
})
if (delPosts.status === 500) {
setErrorData("Post non trouvé!");
}
if (delPosts.status === 400) {
setErrorData("Echec de suppression");
}
if (delPosts.status === 200) {
setErrorData("Post supprimé!");
window.location.reload()
}
}

return (
<main className="main">
    <div className="feed">
        <div className='post'>
<PostCard addPost={createNewPost}></PostCard>
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