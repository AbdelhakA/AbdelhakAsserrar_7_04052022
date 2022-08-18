import React from 'react';
import { useState } from "react"
import { useForm } from "react-hook-form"
import { POST } from '../api_links/Axios';
import endpoints from '../api_links/endpoints';
 
function Posts() {
  // Gestion du formulaire avec useForm
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const [emptyMessage, setEmptyMesssage] = useState(null)
    const [data , setData] = useState("")
    const [file, setFile] = useState(false)
    const [postImage, setPostImage] = useState(null)
  
    const onSubmit = async content => {
      // const data = { text_content: content.text_content };
      if (content.text_content) {
        setEmptyMesssage(false)
      } else {
      
      }

      // ----------------------------------------------------------------

    if (content && content.image_file) {
      // cet appel n'est pas correct
      const userId = localStorage.getItem("userId");
      const newPost = {
        userId : userId,
        content : content.text_content
      };
      const bodyFormData = new FormData();
      bodyFormData.append('post', JSON.stringify(newPost));
      bodyFormData.append('image', content.image_file);
      POST(endpoints.CREATE_POST, bodyFormData, null, {
        'content-type' : 'multipart/form-data'
      })
      .then (response => {
        if (response.status === 400) {
          setData("Publication non créée!")
        }
        if (response.status === 201) {
          setData("Publication créée!")
        }
      })
      .catch (error => {

      });
    } else { 
      const userId = localStorage.getItem("userId");
      const newPost = {
        userId : userId,
        content : content.text_content
      };
      const bodyFormData = new FormData();
      bodyFormData.append('post', JSON.stringify(newPost))
      POST(endpoints.CREATE_POST, bodyFormData, null, {
        'content-type' : 'multipart/form-data'
      })
      .then (response => {
        if (response.status === 400) {
          setData("Post non créé!")
        }
        if (response.status === 201) {
          setData("Post créé!")
        }
      })
      .catch (error => {

      })
    }
  }

// function Posts() {
//    const {
//         register,
//         handleSubmit, 
//         formState: { errors },
//     } = useForm()


// const [emptyMessage, setEmptyMessage] = useState(null)
// const [ , setErrorData] = useState("")

// const onSubmit = async content => { 
//   const data = { users_id: users_id, text_content: content.text_content };
//     if(content.text_content) {
//         setEmptyMessage(false)
//     } else {
//         data = data
//     }

//     POST(endpoints.CREATE_POST, {
//       userId: data.users_id,
//       postId: data.postId,
//       content: data.commentMessage,
//     })

// .then (res => {

//   if (res.status === 400) {
//     setErrorData('Publication non créée')
//     }
//     if (res.status === 201) {
//     setErrorData('Publication créée')
//     }
//   });
// }



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
            {emptyMessage && "Veuillez publier un message !"}
          </p>
          <img src={postImage} alt="" />
        </div>
      </form>
    </div>
  )
};


export default Posts;