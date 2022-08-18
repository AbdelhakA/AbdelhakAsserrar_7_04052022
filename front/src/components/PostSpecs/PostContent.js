import React, { useState, useEffect } from "react"
import CreateComment from "../CommentSpecs/CreateComment";
import dayjs from 'dayjs';
import { GET } from '../api_links/Axios';
import endpoints from '../api_links/endpoints';

// import { set } from "react-hook-form";

function PostContent (post, deletePost) {

    const [comment, setComment] = useState([])
    const [displayComments, setDisplayComments] = useEffect(false);
    const [displayLikes, setDisplayLikes] = useState(false)
    const [data, setData] = useState("")

    const addComment = function addNewComment () {
        setComment(setState => {
            return [...setState, addNewComment]
        })
    }
    const delComment = function delComment () {
       let vanish = comment.filter(i => i.id !== Comment.id)
       setComment(vanish)
    }

    const user = JSON.parse(localStorage.getItem("user")) // on extrait les données du LS
    const userId = user.id
    const userAdmin = user.admin


    
    async function loadComments () { // charger les commentaires depuis l'API

      if (post.userId === userId || userAdmin) {
        // setDeleteIconTrash(true)
      

         }

    }

    useEffect(() => {
        loadComments();
          if (post.userId === userId || userAdmin) {
            // setDeleteIconTrash(true)
          }       
      }, [post.userId, userId, userAdmin]);

      // Likes
      function likeHandle() {
        GET(endpoints.LIKE_UNLIKE, {})
        .then (res => {
          if (res.status === 400) {
            setData("Likes non fonctionnels!")
          }
          if (res.status === 200) {
            setData("Likes!")
          }
        })
        .catch (error => {
        })
      }
    
      // get likes
      function loadLikes() {
        GET(endpoints.GET_LIKES , {
        })
        .then (resLikes => {
          if (resLikes.status === 404) {
            setData("Likes non chargés!")
          }
          if (resLikes.status === 200) {
            setData("Likes chargés!")
            setDisplayLikes(data.length)
          }
        })
        .catch (error => {
        })
      }
      
      useEffect(() => {
        loadLikes();
      },)
    


      return (
        <div>
          <div className="card-content">
            <div className="flex-avatar">
              <h4 className="author-posts">{post.User.pseudo}</h4>
            </div>
              <span className="time_post">{dayjs(post.createdAt).locale("fr").fromNow()}</span>
              <div className="post-content">
                <p className="text-post">{post.content}</p>
              </div>
            <div className="footer-post-content">
              {/* <FavoriteIcon className="favorite-icon" onClick={likeHandle} /> */}
              <span className="all-likes">{displayLikes}</span>
              <span>
                {/* {DeleteIconTrash && (
                  <DeleteIcon className="delete-icon"
                    onClick={() => {
                    if (window.confirm("Voulez-vous supprimer ce post ?")) {
                      deletePost()
                    }
                  }} /> */}
                {/* )} */}
              </span>
            </div>
    
            <div className="all-comments"> 
              <span className="p-comments">Commenter</span>
              {displayComments && comment.map((comments, i) => (
                <CreateComment className="comments"
                  comments={comments}
                  key={i}
                  commentDelete={delComment}
                  postId={post.id}
                />
              ))}
            </div>
            <div className="ajout-new-comment">
              <CreateComment postId={post.id} newComment={addComment} />
            </div>
          </div>
        </div>
      )
    }
    
    export default PostContent;



//

    
