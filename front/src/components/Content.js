import React from "react";
import { useState, useEffect } from "react";
import { GET } from "../Components/api_links/Axios";
import { DELETE } from "../Components/api_links/Axios";
import endpoints from "./api_links/endpoints";
import Posts from "../Components/PostSpecs/Posts";
import PostContent from "../Components/PostSpecs/PostContent";

function Content() {
  const [posts, setPosts] = useState([]);

  const userId = localStorage.getItem("userId");
  const [data, setErrorMessage] = useState("");

  async function loadPosts() {
    GET(endpoints.GET_ALL_POSTS, {
      userId: userId,
    })
      .then((resPost) => {
        if (resPost.status === 200) {
          setErrorMessage("Posts trouvés!");
        }
        setPosts(resPost.data);
        if (resPost.status === 400) {
          setErrorMessage("Posts non trouvés!");
        }
        if (resPost.status === 200) {
          setErrorMessage("Posts trouvés!");
        }
      })
      .catch((error) => {});
  }

  useEffect(() => {
    loadPosts();
  }, []);

  const createNewPost = () => {
    window.location.reload();
  };

  function deletePost(id) {
    const data = posts.filter((post) => post.id !== id);
    // cet appel n'est pas correcte
    const delPosts = DELETE(endpoints.DELETE_POST, {
      userId: data.userId,
      postId: data.postId,
      content: data.commentMessage,
    });
    if (delPosts.status === 500) {
      setErrorMessage("Publication non trouvé!");
    }
    if (delPosts.status === 400) {
      setErrorMessage("Echec de suppression");
    }
    if (delPosts.status === 200) {
      setErrorMessage("Publication supprimé!");
      window.location.reload();
    }
    console.log("hello");
  }

  return (
    <main className="main">
      <div className="feed">
        <div className="post">
          <Posts addPost={createNewPost}></Posts>
        </div>
        <h1> Nouvelles publications:</h1>

        {posts.map((post) => (
          <div className="allPosts" key={post.id}>
            <div>Post id {post._id} contenu {post.content}<button onClick={() => deletePost}>Delete</button></div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Content;
