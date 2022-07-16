import React, { useState, useEffect } from "react"
import { DELETE } from './api_links/Axios';
import endpoints from './api_links/endpoints';
import dayjs from "dayjs"
// import DeleteIcon from '@mui/icons-material/Delete';

//  DAYJS
require("dayjs/locale/fr")
const relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

function Comments({ comments, deleteComment }) {

  const [DeleteIconTrash, setDeleteIconTrash] = useState(false)
  const [data, setErrorData] = useState("")

  const userInfo = JSON.parse(localStorage.getItem("user"))
  const userId = userInfo.id
  const userAdmin = userInfo.admin

  useEffect(() => {
    if (comments.User.id === userId || userAdmin === 1) {
      setDeleteIconTrash(true)
    }
  }, [userId, userAdmin]) //configuration des droits à la suppression d'un commentaire

  async function deleteComment() {
    DELETE(endpoints.DELETE_POST, {
      content: data.content
    })
    .then (response => {
      if (response.status === 200) {
        (window.confirm("Commentaire supprimé."))
        window.location.reload();
      }
      if (response.status === 400) {
          setErrorData("Droits Admin requis pour supprimer ce commentaire.")
      }
    })
    .catch (error => {
    });
  }

  return (
    <div className="card-comments">
      <div className="card-comments-header">
        <p className="author-comments">{comments.User.pseudo}</p>
      </div>
      <div className="comments-text">
        <p className="comments-text-p">{comments.content}</p>
      </div>
      <span>
        {DeleteIconTrash && (
          <DeleteIcon className="delete-icon-comments"
            onClick={() => {
              if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
                deleteComment(comments.id)
              }
            }} />
        )}
      </span>
    </div>
  )
}

export default Comments;



// import React from "react"
// import { useState } from "react"
// import endpoints from '../api_links/endpoints';


// function Comment (posts_id) {
// const [comment, setComment] = useState("")
// const [button, setButton] = useState(false); // "false" parce que le commentaire n'est pas encore posté
// const user = localStorage.getItem('user')
// const userId = JSON.parse('user').id 
// const submitComment = data => {
//     const api_response = PUT(endpoints.CREATE_COMMENT, {
//       users_id: userId,
//       posts_id: posts_id,
//       content: comment
//     })
//     if (api_response.status === 400) {
//     errorMessage('utilisateur introuvable');
//     }
//     if (api_response.status === 201) {
//     newComment(res.data.comment)
//     window.location.reload()
//     }
// }

// return (
//     <div>
//       <form onSubmit={(submitComment)} className="comment-form">
//         <input className="new-comment"
//           type="text"
//           placeholder="Exprimez-vous..."
//           onChange={e => setComment(e.target.value)}
//           value={comment}
//           id="input-comment"
//         />
//         {setSendButton && (
//           <SendIcon className="send-icon" onClick={submitComment} />
//         )}
//       </form>
//     </div>
//   )

// }

// export default Comment

