import React from 'react';
import { useState } from "react"
import { useForm } from "react-hook-form"
import { POST } from '../api_links/Axios';
import endpoints from '../api_links/endpoints';

 

function Posts () {
   const {
        register,
        handleSubmit, 
        formState: { errors }
    } = useForm()


const [emptyMessage, setEmptyMessage] = useState(null)

const onSubmit = async content => { 
    if(content.text_content) {
        setEmptyMessage(false)
    } else {
        data = {users_id: user_id, text_content: content.text_content}
    }

const getPosts = POST(endpoints.CREATE_POST, {
    userId: userId,
    postId: postId,
    content: commentMessage
  })

  if (getPosts.status === 400) {
    setErrorData('Publication non créée')
    }
    if (getPosts.status === 201) {
    setErrorData('Publication créée')
    }

}



return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="post-form">
        <div className="header-post">
          <textarea
            row={2}
            type="textarea"
            className="text_content_input"
            {...register("text_content", {
              minLength: {
                value: 2,
                message:
                  "Vous devez créer un post de 2 caractères au minimum !",
              },
              maxLength: {
                value: 500,
                message: "Vous avez atteint le nombre maximal de caractères !",
              },
            })}
          />
          {errors.text_content && <span className='error-msg'>{errors.text_content.message}</span>}
        </div>
        <div className="button">
          <input className="button-post" type="submit" value="Post" />
        </div>

        <div className="message-post">
          <p>
            {emptyMessage && "Veuillez publiez un message !"}
          </p>
        </div>
      </form>
    </div>
  )
};


export default Posts;