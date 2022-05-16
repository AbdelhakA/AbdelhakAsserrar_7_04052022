import React, { useState, useEffect } from "react"
import CreateComment from "../CommentSpecs/CreateComment";
//import dayjs from 'dayjs';
import { DELETE } from '../api_links/Axios';
import endpoints from '../api_links/endpoints';
import { set } from "react-hook-form";

function PostContent (post, deletePost) {

    const [comment, setComment] = useState([])
    const [displayComments, setDisplayComments] = useEffect(false)
    const [displayLikes, setDisplayLikes] = useState(false)

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

        try { // la syntaxe try... catch nous permet de gérer les éventuelles erreurs de chargements des commentaires
            const { data } = await api.get(`/comments?id=${post.id}`)
            setComment(data)
            setDisplayComments(data.length > 0)
        } catch (error) { 

         }

    }

    useEffect(() => {
        loadComments();
          if (post.users_id === userId || userAdmin) {
            setDeleteIconTrash(true)
          }       
      }, []);

      // Likes

      const likeHandle = async data => {
        try {
          const response = await api.get(`/likes/${post.id}/like/${userId}`)
            await api.post("/likes", {
              users_id: userId,
              posts_id: post.id,
              like: !response.data
            })
          const countLikes = !response.data ? displayLikes + 1 : displayLikes - 1;
          setDisplayLikes(countLikes)
        } catch (error) {
          console.log(error.message)
        }
      }
      // get likes
      async function loadLikes() {
        try {
          const { data } = await api.get(`/likes/posts/${post.id}`)
          setDisplayLikes(data.length)
        } catch (error) {
        }
      }
    
      useEffect(() => {
        loadLikes();
      }, [])


      return (
        <div>
          <div className="card-feed">
            <div className="flex-avatar">
              <h4 className="author-posts">{post.User.pseudo}</h4>
            </div>
              <span className="time_post">{dayjs(post.createdAt).locale("fr").fromNow()}</span>
              <div className="post-feed">
                <p className="text-post">{post.text_content}</p>
              </div>
            <div className="footer-post-feed">
              <FavoriteIcon className="favorite-icon" onClick={likeHandle} />
              <span className="all-likes">{displayLikes}</span>
              <span>
                {DeleteIconTrash && (
                  <DeleteIcon className="delete-icon"
                    onClick={() => {
                    if (window.confirm("Voulez-vous supprimer ce post ?")) {
                      deletePost()
                    }
                  }} />
                )}
              </span>
            </div>
    
            <div className="all-comments"><MessageIcon className="icon-message" />
              <span className="p-comments">Commenter</span>
              {displayComments && comment.map((comments, i) => (
                <Comments className="comments"
                  comments={comments}
                  key={i}
                  commentDelete={delComment}
                  posts_id={post.id}
                />
              ))}
            </div>
            <div className="ajout-new-comment">
              <CreateComment posts_id={post.id} newComment={addComment} />
            </div>
          </div>
        </div>
      )
    }
    
    export default PostContent;



//

    
