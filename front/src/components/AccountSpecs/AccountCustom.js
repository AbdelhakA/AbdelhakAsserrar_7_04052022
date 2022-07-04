import React, {useState} from "react"
import { useForm } from "react-hook-form"
import EraseProfile from "./DeleteAccount";
import { PUT } from '../api_links/Axios';
import endpoints from "../api_links/endpoints";
import { useNavigate } from "react-router-dom"


function AccountCustom() {

  const navigate = useNavigate()
  const [ , setErrorData] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [infoUser] = useState({
    pseudo: "",
    email: "",
    password: ""
  })

  const onSubmit = data => {
    
    PUT(endpoints.UPDATE_PASSWORD, {
      password: data.password,
    })
    .then (respassword => {
    if (respassword.status === 500) {
      setErrorData("Vous n'êtes pas inscrit!");
    }
    if (respassword.status === 204) {
      localStorage.clear();
      (window.confirm("Votre mot de passe a bien été modifié !"))
      navigate("/profil")
    }
  })

    
    const respseudo = PUT(endpoints.UPDATE_PSEUDO, {
      pseudo: data.pseudo,
    })
    if (respseudo.status === 500) {
      setErrorData("Vous n'êtes pas inscrit!");
    }
    if (respseudo.status === 204) {
      localStorage.clear();
      (window.confirm("Votre pseudo a bien été modifé !"))
      navigate("/profil")
    }

  }

  return (
    <div onSubmit={handleSubmit(onSubmit)} className="container-profil">
      <form className="form">
        <div className="form-profil">
          <label htmlFor="pseudo" className="pseudo-label">
            Pseudo:
          </label>
          <br />

    {/*pseudo*/}
          <input
            type="text"
            defaultValue={infoUser.pseudo}
            name="pseudo"
            className="form-input"
            {...register("pseudo", {
              minLength: {
                value: 2,
                message: "Il faut que votre pseudo ait au moins 2 lettres!",
              },
              maxLength: {
                value: 30,
                message: "Ce pseudo semble trop long...",
              },
            })}
          />
          {errors.pseudo && <span>{errors.pseudo.message}</span>}
          <br />

    {/*email*/}
          <label htmlFor="email" className="email-label">
            Email:
          </label>
          <br />
          <input
            className="form-input"
            defaultValue={infoUser.email}
            type="email"
            {...register("email", {
              message: "Vous devez entrer une adresse mail valide",
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <br />

          <input
            className="button-profil"
            type="submit"
            value="Modifier"
          />
          <EraseProfile />
        </div>
      </form>
    </div>
  )
}
export default AccountCustom;