import React from "react"
import { useState } from "react"
import endpoints from '../api_links/endpoints';


function Comment (posts_id) {
const [comment, setComment] = useState("")
const [button, setButton] = useState(false); // "false" parce que le commentaire n'est pas encore posté
const user = localStorage.getItem('user')
const userId = JSON.parse('user').id 
const submitComment = data => {
    const api_response = PUT(endpoints.CREATE_COMMENT, {
      users_id: userId,
      posts_id: posts_id,
      content: comment
    })
    if (api_response.status === 400) {
    errorMessage('utilisateur introuvable');
    }
    if (api_response.status === 201) {
    newComment(res.data.comment)
    window.location.reload()
    }
}

return (
    <div>
      <form onSubmit={(submitComment)} className="comment-form">
        <input className="new-comment"
          type="text"
          placeholder="Exprimez-vous..."
          onChange={e => setComment(e.target.value)}
          value={comment}
          id="input-comment"
        />
        {setSendButton && (
          <SendIcon className="send-icon" onClick={submitComment} />
        )}
      </form>
    </div>
  )

}

export default Comment

