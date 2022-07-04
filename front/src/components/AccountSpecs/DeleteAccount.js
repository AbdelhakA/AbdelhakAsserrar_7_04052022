import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DELETE } from "../api_links/Axios";
import endpoints from "../api_links/endpoints";
// import DeleteIcon from '@mui/icons-material/Delete';

function DeleteAccount() {

  const navigate = useNavigate()
  const [data, setErrorMessage] = useState("")

  const deleteHandle = () => {

    DELETE(endpoints.DELETE_USER, {
      userId: data.userId
    })
    .then (response => {
      if (response.status === 500) {
        setErrorMessage("Vous n'êtes pas inscrit");
      }
      if (response.status === 204) {
        localStorage.clear();
        (window.confirm("Votre compte a été supprimé."))
        navigate("/front/src/Pages/SignUp.js")
      }
    })
    .catch (error => {
    });
  }

  return (
    <div className="delete-account">
    </div>
  )
}

export default DeleteAccount;


// Supprimer compte<DeleteIcon onClick {...() => {
//   if (window.confirm("Voulez-êtes sûr de vouloir supprimer votre profi?")) {
//     deleteHandle()
//   }
// }} />
