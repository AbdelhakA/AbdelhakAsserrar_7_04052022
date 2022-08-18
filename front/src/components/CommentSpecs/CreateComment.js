import React from "react"
import { useState } from "react"
// import SendIcon from '@material-ui/icons/Send';
import { PUT } from '../api_links/Axios';
import endpoints from "../api_links/endpoints";

function CreateComment ({ posts_id, addNewComment }) {
    const [commentMessage, setCommentMessage] = useState("");
    const [button, setButton] = useState(false); // bouton Envoyer
    const [errorData, setData] = useState("")
    const userId = JSON.parse(localStorage.getItem("user")).id
    

    const onSubmit = data => {

        const response = PUT(endpoints.CREATE_COMMENT, {
          users_id: userId,
          posts_id: posts_id,
          content: commentMessage
        })
        if (response.status === 400) {
          setData("Vous ne pouvez pas écrire de commentaire!");
        }
        if (response.status === 201) {
          addNewComment(data.response)
          window.location.reload()
        }
      }

      return (
        <div>
          <form onSubmit={(onSubmit)} className="comment-form">
            <input className="new-comment"
              type="text"
              placeholder="Écrivez un commentaire..."
              onChange={e => setCommentMessage(e.target.value)}
              value={commentMessage}
              id="input-comment"
            />
            {/* {setButton && (
              // <SendIcon className="send-icon" onClick={onSubmit} />
            )} */}
          </form>
        </div>
      )

}

export default CreateComment

